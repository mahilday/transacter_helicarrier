export const dateFormatter =(date: string) => {
    const dateObj = new Date(date);
    let options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString("en-US", options);
}

export const dateComparison=(a: any, b: any)=> {
    const date1: any = new Date(a)
    const date2: any = new Date(b)
    
    return date1 - date2;
}