
const useFileList = () =>{
    const files = ref([])

    function addFiles(newFiles){
        let newUploadableFiles = [...newFiles]
            .map((file) => new UploadableFile(file))
            .filter((file) => !fileExists(file.id))
        files.value = files.value.concat(newUploadableFiles)
    }

    function fileExists(fileId){
        return files.value.some((file) => file.id === fileId)
    }

    function removeFile(file){
        const idx = files.value.indexOf(file)
        if(idx > -1) files.value.splice(idx, 1)
    }

    return {files, addFiles, removeFile}
}
export default useFileList

interface File{
    name: string;
    size: number;
    type: string;
    extension: string;
    content: ArrayBuffer;
}


class UploadableFile{
    file: File
    id: String
    url: String
    status: Boolean

    constructor(file){
        this.file = file
        this.id =` ${file.name}-${file.size}-${file.lastModified}-${file.type}`
        this.url = URL.createObjectURL(file)
        this.status = null
    }
}