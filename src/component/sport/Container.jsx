export default function Container({ className = "", corners = "10px", style = {}, onClick }) {

    fetch("https://v3.football.api-sports.io/fixtures?live=all", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": "cd4162348bcc498480bdbef575c867c4"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
    

    

    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}