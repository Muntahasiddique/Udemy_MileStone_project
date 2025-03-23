const imagePikerElement = document.getElementById('image');
const imagePreviewElement = document.getElementById('previewimage');
function UpdateImagePreview(){
   const file = imagePikerElement.files;
   if(!file || file.length === 0){
    imagePreviewElement.style.display = 'none';
       return;
   }
   else{
const PickedFile = file[0];
const GetLocalUrlofimage = URL.createObjectURL(PickedFile);
imagePreviewElement.src = GetLocalUrlofimage;
imagePreviewElement.style.display = 'block';
   }
}

imagePikerElement.addEventListener('change' , UpdateImagePreview);