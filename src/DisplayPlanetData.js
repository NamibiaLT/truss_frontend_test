import React from 'react';
import { Table } from '@trussworks/react-uswds'
import axios from 'axios';

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
        axios.get("https://swapi.dev/api/planets/")
            .then(res => this.setState({
                isLoaded: true,
                planets: res.data.results
            })
            )
            .catch(error =>
                this.setState({
                    isLoaded: true,
                    error
                })
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
                    <thead>
                        <tr><th>Planets</th>
                            <th>Climate</th>
                            <th>Residents</th>
                            <th>Terrains</th>
                            <th>Population</th>
                            <th>Water Surface Area</th>
                        </tr>
                    </thead>
                    <tbody >
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
                                <td data-testid="surface_water">{this.checkUnknown(planet.surface_water)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            );
        }
    }
}
export default DisplayPlanetData;
