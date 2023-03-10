import React from "react"

export default function BackGround() {

    const [backgroundData, setBackgroundData] = React.useState({
        picture: '',
        auth: '',
        queryInput: 'animal'
    })

    React.useEffect(() => {
        const orientation = window.screen.height >= window.screen.width ? 'portrait' : 'landscape'
        fetch(`https://api.unsplash.com/photos/random?orientation=${orientation}&query=${backgroundData.queryInput}&nt=1&client_id=Aa4kyolAtHfU5RSmI6ttF9F-KYV7JpF4pjX74OwEhHk`)
            .then(res => res.json())
            .then(data => {
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

            <select value={backgroundData.queryInput} onChange={handleChange} className="main--background-picture--form--select" name="queryInput" id="queryInput">
                <option className="main--background-picture--form--option" value="nature">nature</option>
                <option className="main--background-picture--form--option" value="city">city</option>
                <option className="main--background-picture--form--option" value="animal">animal</option>
            </select>

            <h1 className="main--background-picture-auth">{backgroundData.auth}</h1>
        </>
    )

}

