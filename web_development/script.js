async function euae(event) {
    console.log(event.target)

    let a = await fetch("http://localhost:8000", {
        headers: {
            "Content-Type": "application/json",
        }
    }).then(async (res) => await res.json());

    event.target.innerHTML = a.euae;
    console.log(event.target)
}
