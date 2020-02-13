import * as React from 'react';
import './list.scss';
import ItemList from "../../components/item-list/item-list";
const list = [
    {
        name: 'Masha',
        surname: 'Ivanova',
        country: 'USA',
        email: 'masha.ivanova@mail.com',
        role: 'Trainer',
        sport: 'Rowing'
    },
    {
        name: 'Katya',
        surname: 'Rossa',
        country: 'USA',
        email: 'katya.rossa@mail.com',
        role: 'Sportsman',
        sport: 'Boxing'
    },
    {
        name: 'Sara',
        surname: 'Vanes',
        country: 'France',
        email: 'sara.vanes@mail.com',
        role: 'Trainer',
        sport: 'Baseball'
    },
    {
        name: 'Hanna',
        surname: 'Fernando',
        country: 'Germany',
        email: 'hanna.fernando@mail.com',
        role: 'Sportsman',
        sport: 'Badminton'
    },
    {
        name: 'Vasya',
        surname: 'Pupkin',
        country: 'Russia',
        email: 'vasya.pupkin@mail.com',
        role: 'Trainer',
        sport: 'Tennis'
    },
];
export class List extends React.Component<any, any> {
    public constructor(props: any) {
        super(props);
        this.state = {
            list: list,
        };
    }

    public render() {
        return (
            <div>
                {
                    this.state.list.map((item: any) => {
                        return (
                            <ItemList
                                name={item.name}
                                surname={item.surname}
                                country={item.country}
                                email={item.email}
                                role={item.role}
                                sport={item.sport}/>
                        )
                    })
                }
            </div>

        );
    }
}

export default List;
