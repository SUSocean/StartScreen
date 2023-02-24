import React from 'react'

export default function Background() {

    const [photoData, setphotoData] = React.useState()

    React.useEffect(() => {
        fetch('https://api.unsplash.com/photos/random?client_id=Aa4kyolAtHfU5RSmI6ttF9F-KYV7JpF4pjX74OwEhHk')
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setphotoData(() => {
                    return {
                        photo: data.urls.regular,
                        auth: data.user.username
                    }
                })
            })
    }, [])
    console.log(photoData)

    return (
        <div>
            <img src={photoData.photo} alt="" />
        </div>
    )
}