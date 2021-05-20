import React from 'react';

// const Try = (props) => { // 자식컴포넌트의 디폴트 상태. 내부에서 사용할땐 props.tryInfo 로 접근한다.
const Try = ({ tryInfo }) => { // props를 구조분해 한 상태. 내부에선 tryInfo 로 바로 접근한다.
    return (
        <div style={{
            width: "100%",
            height: "45px"
        }}>
            <h3 style={{ 
                float:'left',
                margin:'10px 10px 0 50px',
                color:"#394169"
                }}
                > {tryInfo.putnum}</h3>
            <h3 style={{ 
                float:'left',
                margin:'10px 10px 0 15px',
                color:"#394169"
                }} 
            >{tryInfo.result}</h3>
         </div>
    )
};

export default Try;