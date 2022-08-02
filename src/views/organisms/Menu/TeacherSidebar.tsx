import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ICON_SIZE } from 'constants/icon';
import { useSelector } from 'react-redux'
import { BasicColor } from 'views/Color';
import { Icon } from 'views/atoms/Icon/Icon';
import menu_toggle from 'views/assets/Menu Toggle.svg';
import styled from 'styled-components';
import { ScreenSize } from 'constants/screenSize';
import { dictionary } from 'views/pages/Student/Menus/dictionary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MenuItem, MenuTitle, MenuMark, LineMenu } from './Style'
import assignmentMark from 'views/assets/menu/assignmentMark.png';
import certificateMark from 'views/assets/menu/certificateMark.png';
import classroomMark from 'views/assets/menu/classroomMark.png';
import helpMark from 'views/assets/menu/helpMark.svg';
import manageSubMark from 'views/assets/menu/manageSubMark.svg';
import reportMark from 'views/assets/menu/reportMark.svg';
import { useStyles } from './Style'
import commonDictionary from 'constants/commonDictionary'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Button,
    Box,
    Drawer,
    ListItem,
    useMediaQuery
} from '@mui/material';
export const TeacherSidebar: FC = () => {

    const [state, setState] = useState(false)
    const isMobile = useMediaQuery(`(max-width: ${ScreenSize.phone})`)
    const history = useHistory();
    const classes = useStyles();
    const language: string = useSelector((state: any) => state.user.language) || 'en-us';

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    const handleMenu = (to: string) => {
        toggleDrawer(false);
        history.push(to)
    }

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>
                <Icon
                    image={menu_toggle}
                    size={ICON_SIZE.small}
                />
            </Button>
            <Drawer
                sx={{ '& .MuiPaper-root': { background: BasicColor.blue, justifyContent: 'center' } }}
                open={state}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: isMobile ? 250 : 350 }}
                    role='presentation'
                    // onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <Accordion className={classes.menuContainer}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <MenuMark src={classroomMark} />
                            <MenuTitle>{dictionary[language]?.classrooms}</MenuTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MenuItem onClick={() => handleMenu('/teacher/classrooms')}>{dictionary[language]?.classrooms}</MenuItem>
                            <MenuItem onClick={() => handleMenu('/teacher/groups')}>{dictionary[language]?.manageGroups}</MenuItem>
                            <MenuItem onClick={() => handleMenu('/teacher/notes')}>{dictionary[language]?.notesForKids}</MenuItem>
                            <MenuItem onClick={() => handleMenu('/teacher/dashboard')}>{commonDictionary[language]?.class_dashboard}</MenuItem>
                            <MenuItem onClick={() => handleMenu('/teacher/classroomSettings')}>{commonDictionary[language]?.classroom_settings}</MenuItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.menuContainer}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <MenuMark src={assignmentMark} />
                            <MenuTitle>{dictionary[language]?.assignments}</MenuTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MenuItem onClick={() => handleMenu('/teacher/assignments')}>{dictionary[language]?.createAssignments}</MenuItem>
                            <MenuItem onClick={() => handleMenu('/teacher/results')}>{dictionary[language]?.viewResults}</MenuItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.menuContainer}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <MenuMark src={certificateMark} />
                            <MenuTitle>{dictionary[language]?.certificates}</MenuTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MenuItem onClick={() => handleMenu('/teacher/certificates')}>{dictionary[language]?.addCertificates}</MenuItem>
                            <MenuItem onClick={() => handleMenu('/teacher/viewCertificates')}>{dictionary[language]?.viewCertificates}</MenuItem>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.menuContainer}>
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={<ExpandMoreIcon />}
                        >
                            <MenuMark src={reportMark} />
                            <MenuTitle>{dictionary[language]?.reports}</MenuTitle>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MenuItem onClick={() => handleMenu('/teacher/classroomProgress')}>{dictionary[language]?.classroomProgress}</MenuItem>
                            <MenuItem onClick={() => handleMenu('/teacher/parentReport')}>{dictionary[language]?.parentReport}</MenuItem>
                        </AccordionDetails>
                    </Accordion>
                    <LineMenu>
                        <MenuMark src={manageSubMark} />
                        <MenuTitle onClick={() => handleMenu('/teacher/settings')}>{dictionary[language]?.manageSubscription}</MenuTitle>
                    </LineMenu>
                    <LineMenu>
                        <MenuMark src={helpMark} />
                        <MenuTitle onClick={() => handleMenu('/teacher/help')}>{dictionary[language]?.help}</MenuTitle>
                    </LineMenu>
                    <LineMenu>
                        <MenuMark src={helpMark} />
                        <MenuTitle onClick={() => handleMenu('/')}>{dictionary[language]?.logout}</MenuTitle>
                    </LineMenu>
                </Box>
            </Drawer>
        </div>
    );
}

export default TeacherSidebar


export const IconContainer = styled.div`
  width: 50%;
  height: 70px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledListItem = styled(ListItem)`
&.MuiListItem-root {
    justify-content: flex-end;
}
`
