import React from 'react';
import 'axios';
import { Table } from '@trussworks/react-uswds'

class DisplayPlanetData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            planets: []
        };
    }

    componentDidMount() {
        fetch("https://swapi.dev/api/planets/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        planets: result.results
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    checkUnknown(surface_water) {
        if (isNaN(surface_water)) {
            return 'unknown';
        } else {
            return Math.round(surface_water) + '%';
        }
    }

    render() {
        const { error, isLoaded, planets, data, loading } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Table bordered>
                    <tr> <th>Planets</th>
                        <th> Climate </th>
                        <th> Residents </th>
                        <th> Terrains </th>
                        <th> Population </th>
                        <th> Water Surface Area </th>
                    </tr>
                    {planets.sort((a, b) => {
                        const planetA = a.name.toUpperCase();
                        const planetB = b.name.toUpperCase();

                        let comparison = 0;
                        if (planetA > planetB) {
                            comparison = 1;
                        } else if (planetA < planetB) {
                            comparison = -1;
                        }
                        return comparison;
                    }).map(planet => (
                        <tr key={planet.name}>
                            <td><a href={planet.url} target="_blank">{planet.name}</a></td>
                            <td>{planet.climate}</td>
                            <td>{planet.residents.length}</td>
                            <td>{planet.terrain}</td>
                            <td>{planet.population}</td>
                            <td>{this.checkUnknown(planet.surface_water)}</td>
                        </tr>
                    ))}
                </Table>
            );
        }
    }
}

export default DisplayPlanetData;