import {
  FC, useEffect, useState,
  useRef
} from 'react';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { TeacherPgContainer } from 'views/molecules/PgContainers/TeacherPgContainer';
import Table from 'views/molecules/MuiTable';
import Button from 'views/molecules/MuiButton';
import { BasicColor } from 'views/Color';
import {
  ExcelRenderer
} from 'react-excel-renderer';
import { useHistory } from 'react-router-dom';
import { doAddTeachersToSchool } from 'app/actions';
import { any2String } from 'views/utils';
import LoadingButton from '@mui/lab/LoadingButton';
import commonDictionary from 'constants/commonDictionary'
import { useMutation } from '@tanstack/react-query';
import { GENDERS, USERTYPES } from 'constants/common';

interface MuiTableFunc {
  getData(): any;
  handleAddData(): void;
}


const AddTeachers: FC = () => {

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useSelector((state: any) => state.school);
  const { language, token } = useSelector((state: any) => state.user);
  const TableRef = useRef<MuiTableFunc>(null)
  const [loading, setLoading] = useState(false)

  const [tableData, setTableData] = useState<any>([])

  const columns = [
    // { id: 'index', label: 'No', maxWidth: 10 },
    { id: 'email', label: commonDictionary[language]?.email, minWidth: 30 },
    { id: 'name', label: commonDictionary[language]?.name, minWidth: 30 },
    {
      id: 'lastName',
      label: commonDictionary[language]?.last_name,
      minWidth: 30,
      required: true,
    },
    {
      id: 'password',
      label: commonDictionary[language]?.password,
      minWidth: 50,
    },
    {
      id: 'userType',
      label: commonDictionary[language]?.user_type,
      minWidth: 50,
      editComponent: 'Select',
      selectDatas: USERTYPES || [],
      format: (value: any) => value?.name,
    },
    {
      id: 'gender',
      label: commonDictionary[language]?.gender,
      minWidth: 50,
      editComponent: 'Select',
      selectDatas: GENDERS || [],
      format: (value: any) => value?.name,
    },
  ]

  const addTeachersToSchool = useMutation((params: any) => doAddTeachersToSchool(id,
    any2String(params),
    token), {
    onSuccess: async data => {
      if (data.message) {
        enqueueSnackbar(data.message, { variant: 'error' })
      }
      else {
        enqueueSnackbar('Create Group Succeed', { variant: 'success' })

        history.push('/admin/schoolTeachers')
      }
    },
    onError: async (error: any) => {
      enqueueSnackbar(error.message, { variant: 'error' })
    },
    onSettled: async () => {
      setLoading(false)
    }
  })

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
        email: row.email || '',
        name: row.name || '',
        username: row.email || '',
        lastName: row.lastName || '',
        password: row.password || '',
        gender: row.gender || '',
        userType: row.userType || ''
      })
    }

    setLoading(true)
    addTeachersToSchool.mutate(queryParams)

    // setLoading(true)
    // const res = await doAddStudentsToClassroom(any2String(queryParams), token)
    // if (res.message) {
    //   enqueueSnackbar(res.message, { variant: 'error' })

    //   setLoading(false)
    // } else {
    //   dispatch({
    //     type: TEACHER_SET_CURRENT_CLASSROOM,
    //     payload: res.data,
    //   });
    //   setLoading(false)

    //   history.push('/teacher/students')
    // }


  }

  const handleChangeExcelFile = (e: any) => {
    const fileObj = e.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err: any, resp: any) => {
      if (err) {
        enqueueSnackbar('Error fetching excel', { variant: 'error' })
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
    <TeacherPgContainer onlyLogoImgNav={false} title={commonDictionary[language]?.add_teachers}>
      <>
        <div style={{ width: '100%' }}>
          <Button
            bgColor={BasicColor.green}
            onClick={handleNew}
            align="right"
            value={commonDictionary[language]?.add_new_teacher}
            margin="20px"
          />
          {/* <Button
            bgColor={BasicColor.orange}
            onClick={handleImportExcel}
            align="right"
            value={commonDictionary[language]?.import_excel}
            margin="20px"
          /> */}
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
          {commonDictionary[language]?.create_teachers}
        </LoadingButton>
      </>
    </TeacherPgContainer>
  );
};
export default AddTeachers
