import * as React from 'react';

interface IUserInfoProps { }

function callApi() {
    new Promise((resolve, reject) => {
        fetchList()
            .then((response) => {
                console.log(response)
                return resolve(response)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export class Home extends React.PureComponent<IUserInfoProps> {
    constructor(props: IUserInfoProps) {
        super(props)
        this.state = {
            data: []
        }
    }

    public render() {
        return (
            <React.Fragment>
                <p>hiiiiiii</p>
                <button onClick={() => {
                    callApi()
                }}
                >press me</button>
            </React.Fragment>

        )
    }
}

const fetchList = () => {
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then((response) => {
                // console.log(`response`, response)
                if (response.status !== 200)
                    reject(`error`)
                return response.json()
            })
            .then((data) => {
                // console.log(`data : `, data)
                resolve(data);
            })
            .catch((error) => {
                console.log(`error`)
                reject(JSON.stringify(error))
            })
    })
}









// export const Home: IUserInfoProps = () => {
//     return (
//         <p>hiwwww</p>
//     )
// }
