/**
    Scripting for the calendar functions on the index page
*/

var submitFormVisible = false;

var checkChildren = function(target, parent)
{
    var isChild = false;
    var totalChildren = parent.children.length;

    for(var i = 0; i < totalChildren; i++)
    {
        if(target == parent.children[i])
        {
            return true;
        }
        else
        {
            isChild = checkChildren(target, parent.children[i]);
        }
    }

    return isChild;
};

document.onclick = function(event)
{
    event = event || window.event;

    if(submitFormVisible)
    {
        var submitForm = document.getElementById("apptSubmitDiv");

        var isChild = checkChildren(event.target, submitForm);

        if(event.target != submitForm && !isChild)
        {
            document.getElementById("messageBox").value = "";
            submitForm.style.display = "none";
            submitFormVisible = false;
        }
    }
};

var makeAppt = function(event, day)
{
    var submitForm = document.getElementById("apptSubmitDiv");
    submitForm.style.display = "block";
    submitFormVisible = true;

    event.stopPropagation();
    return false;
};
