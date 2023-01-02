import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import styled from "styled-components";
const Wrapper = styled.div`
  // width: 500px;
  border-radius: 3px;
  // border: 2px solid palevioletred;
  background-color: #F5F5F5;
  
`;
const StyledElement = styled(Upload)`
  width:200px;
  // .ant-upload{
  //   width:200px;
  //   &:ant-upload-select{
  //     width:200px;
  //   }
  // }
  // .ant-upload-select{
  //   width:200px;
  //   background-color:yellow;
  // }
  .ant-upload .ant-upload-select{
    width:200px;
  }
  // .ant-upload-wrapper{
  //   width:200px;
  // }
  // .ant-upload-list-item-container{
  //   width:200px;
  // }
`
const UploadPic = ({component}) => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <Wrapper style={{position:"relative"}}>
        <ImgCrop rotate aspect={1.6/1}>
            <StyledElement
                // style={{ width: 300 }}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
            >
               + Upload 

            </StyledElement>
        </ImgCrop>
        {component}
    </Wrapper>
    
  );
};
export default UploadPic;