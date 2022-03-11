import styled from "styled-components";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Subject = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    height: 28px;
    display: flex;
    justify-content: start;
    align-items: center;
`;

const Mark = styled.div`
    flex-grow: 0;
    flex-shrink: 0;
    width: 135px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MarkTable = () => {
    return (<div style={{
        display: "flex",
        flexDirection: "column",
        color: 'black'
    }}>
        <div style={{
            display: "flex",
            backgroundColor: "#CC5B1D"
        }}>
            <Subject>
                <ArrowRightIcon style={{
                    transform: "rotate(90deg)"
                }} />
                <span>Math</span>
            </Subject>
            <Mark>Accuracy</Mark>
            <Mark>Correct</Mark>
            <Mark>Total</Mark>
        </div>
    </div>);
};

export default MarkTable;
