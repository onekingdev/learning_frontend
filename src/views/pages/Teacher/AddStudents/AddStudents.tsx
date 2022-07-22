import {
  FC, useEffect, useState,
  useRef
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import Table from 'views/molecules/MuiTable';
import { dictionary } from './dictionary'
import Button from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import {
  ExcelRenderer
} from 'react-excel-renderer';
import { useHistory } from 'react-router-dom';
import { doAddStudentsToClassroom } from 'app/actions';
import { any2String } from 'views/utils';
import { TEACHER_SET_CURRENT_CLASSROOM } from 'app/types';
import LoadingButton from '@mui/lab/LoadingButton';

interface MuiTableFunc {
  getData(): any;
  handleAddData(): void;
}
const AddStudents: FC = () => {

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch()
  const { language, token } = useSelector((state: any) => state.user);
  const TableRef = useRef<MuiTableFunc>(null)
  const [loading, setLoading] = useState(false)

  const [tableData, setTableData] = useState<any>([])
  const gradeSet = useSelector((state: any) => state.teacher?.currentClass?.audience?.gradeSet) || []
  const classroomId = useSelector((state: any) => state.teacher.currentClass.id)

  const columns = [
    // { id: 'index', label: 'No', maxWidth: 10 },
    { id: 'name', label: dictionary[language]?.name, minWidth: 50 },
    { id: 'lastName', label: dictionary[language]?.lastName, minWidth: 50 },
    {
      id: 'username',
      label: dictionary[language]?.username,
      minWidth: 50,
      required: true,
    },
    {
      id: 'password',
      label: dictionary[language]?.password,
      minWidth: 50,
    },
    {
      id: 'grade',
      label: dictionary[language]?.grade,
      minWidth: 50,
      editComponent: 'Select',
      selectDatas: gradeSet || [],
      format: (value: any) => value?.name,
    },
  ]

  useEffect(() => {

    if (window.Tawk_API?.onLoaded) window.Tawk_API?.showWidget();
  }, []);

  const handleNew = () => {
    TableRef?.current?.handleAddData();
  }

  const handleImportExcel = () => {
    document?.getElementById('file-input')?.click();
  }

  const handleSave = async () => {
    const tableData = TableRef?.current?.getData() || []
    const queryParams: Array<any> = []

    for (const row of tableData) {
      queryParams.push({
        classroomId,
        gradeId: row.grade || '',
        name: row.name || '',
        lastName: row.lastName || '',
        password: row.password || '',
        username: row.username || ''
      })
    }

    setLoading(true)
    const res = await doAddStudentsToClassroom(any2String(queryParams), token)
    if (res.message) {
      enqueueSnackbar(res.message, { variant: 'error' })

      setLoading(false)
    } else {
      dispatch({
        type: TEACHER_SET_CURRENT_CLASSROOM,
        payload: res,
      });
      setLoading(false)

      history.push('/teacher/students')
    }


  }

  const handleChangeExcelFile = (e: any) => {
    const fileObj = e.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err: any, resp: any) => {
      if (err) {
        // console.log(err);
      }
      else {
        if (resp.rows?.length < 1) return;
        const excelHeader: any = [];
        const excelData: any = [];
        for (let i = 0; i < resp.rows[0].length; i++) {
          const col = resp.rows[0][i]
          // const temp: any = {};
          for (const column of columns) {
            if (column?.label === col) {
              excelHeader.push(column?.id)
              break;
            }
          }
        }
        for (let i = 1; i < resp.rows.length; i++) {
          const rowData: any = {};
          for (let j = 0; j < resp.rows[i].length; j++) {
            if (!(excelHeader[j]) || !(resp.rows[i][j])) continue;
            rowData[excelHeader[j]] = resp.rows[i][j];
          }
          excelData.push(rowData);
        }
        setTableData(excelData)
      }
    });
  }
  return (
    <TeacherPgContainer onlyLogoImgNav={false} title={dictionary[language]?.classroom}>
      <>
        <div style={{ width: '100%' }}>
          <Button
            bgColor={BasicColor.green}
            onClick={handleNew}
            align="right"
            value={dictionary[language]?.addNew}
            margin="20px"
          />
          <Button
            bgColor={BasicColor.orange}
            onClick={handleImportExcel}
            align="right"
            value={dictionary[language]?.importExcel}
            margin="20px"
          />
          <input id="file-input" type="file" name="name" style={{ display: "none" }} onChange={handleChangeExcelFile} />
        </div>
        <Table columns={columns} tableData={tableData} ref={TableRef}></Table>
        <LoadingButton
          onClick={handleSave}
          loading={loading}
          variant='contained'
          sx={{
            float: 'right',
            margin: 5
          }}
        >
          {dictionary[language]?.save}
        </LoadingButton>
      </>
    </TeacherPgContainer>
  );
};
export default AddStudents
