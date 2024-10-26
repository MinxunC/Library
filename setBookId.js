export default function setBookId (name){
    let id = name.toLowerCase();
    id = id.replaceAll(' ', '_');
    return id;
}