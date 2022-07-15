import { uploadImg } from '../api/Common';

export const getUploadProps = (setter, formRef, key) => {
  return {
    listType: "picture",
    action: () => false,
    beforeUpload(file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('mark', file?.name)
      const obj = {}
      uploadImg(formData).then(res => {
        obj[key] = res
        formRef.current?.setFieldsValue({
          ...obj
        })
        setter([{
          uid: '1',
          name: file?.name,
          url: res,
        }])
        return false;
      })
      return false;
    },
  }
}