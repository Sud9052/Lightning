({
createRecord : function (component, event, helper) {
    var createRecordEvent = $A.get("e.force:createRecord");
    
    var ObjNmae = component.get("v.objectAPIName");
    var recTypId = component.get("v.recordTypeID");
     if(component.get("v.buttonLabel") == '')
     {
         component.set("v.buttonLabel", "New");
     }
    

    /*
    if(recTypId = '')
    {
        recTypId = null;
    } */
    console.log(ObjNmae);
    createRecordEvent.setParams({
        "entityApiName": ObjNmae,
        "recordTypeId": recTypId
        
    });
    createRecordEvent.fire();
}
})
