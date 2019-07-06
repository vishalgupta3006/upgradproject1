var flag=true;
function editfn(){
    if(flag==true){
        document.getElementById("blogBody").contentEditable="true";
        document.getElementById("blogTitleNew").contentEditable="true";
        document.getElementById("blogBody").focus();
        document.getElementById("editBtn").innerHTML="Save   <i class='far fa-edit'>";
        flag=false;
    }
    else{
        document.getElementById("blogBody").contentEditable="false";
        document.getElementById("blogTitleNew").contentEditable="false";
        document.getElementById("editBtn").innerHTML="Edit   <i class='far fa-save'>";
        flag=true;
    }
}
var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = " <i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}
function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addComments').innerHTML = '<p style="background-color:white; padding:10px;margin:1% 1% 1% 1%;margin-bottom:1%;">'+addEventName+'</p>'+document.getElementById('addComments').innerHTML;          
    a.value=a.defaultValue;
}