export function formatDate(text){
    
    const parts = text.split("/");
    const dt = new Date(
      parseInt(parts[2], 10),
      parseInt(parts[1], 10) - 1,
      parseInt(parts[0], 10)
    );
    
    let month = "" + (dt.getMonth() + 1);
    let day   = "" + dt.getDate();
    const year  = dt.getFullYear();
    
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
}                

export function currentDate() {   
    const today = new Date();
    const day = today.getDate().toString().trim().padStart(2,"0")
    const month = (today.getMonth()+1).toString().trim().padStart(2,"0")
    const date = day+'/'+month+'/'+today.getFullYear().toString();
    return date;
}