import React from "react"

export default function BackGround() {

    const [backgroundData, setBackgroundData] = React.useState({
        picture: '',
        auth: '',
        queryInput: 'animal'
    })

    React.useEffect(() => {
        fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=${backgroundData.queryInput}&nt=1&client_id=Aa4kyolAtHfU5RSmI6ttF9F-KYV7JpF4pjX74OwEhHk`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBackgroundData((prevState) => ({ ...prevState, picture: data.urls.full, auth: data.user.name }))
            })
    }, [backgroundData.queryInput])

    function handleChange(e) {
        setBackgroundData(prevState => (
            {
                ...prevState,
                [e.target.name]: e.target.value
            }
        ))
    }

    return (
        <>
            <img className='main--background-picture' src={backgroundData.picture} alt="background-picture" />

            <select onChange={handleChange} className="main--background-picture--form--select" name="queryInput" id="queryInput">
                <option className="main--background-picture--form--option" value="nature">nature</option>
                <option className="main--background-picture--form--option" value="city">city</option>
                <option className="main--background-picture--form--option" value="animal">animal</option>
            </select>

            <h1>{backgroundData.auth}</h1>
        </>
    )

}

