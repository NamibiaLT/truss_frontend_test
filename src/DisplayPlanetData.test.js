
import React from 'react';
import { shallow, mount } from 'enzyme';
import DisplayPlanetData from './DisplayPlanetData';

const testPlanets = [
    {
        "name": "Tatooine",
        "rotation_period": "23",
        "orbital_period": "304",
        "diameter": "10465",
        "climate": "arid",
        "gravity": "1 standard",
        "terrain": "desert",
        "surface_water": "1",
        "population": "200000",
        "residents": [
            "http://swapi.dev/api/people/1/",
            "http://swapi.dev/api/people/2/",
            "http://swapi.dev/api/people/4/",
            "http://swapi.dev/api/people/6/",
            "http://swapi.dev/api/people/7/",
            "http://swapi.dev/api/people/8/",
            "http://swapi.dev/api/people/9/",
            "http://swapi.dev/api/people/11/",
            "http://swapi.dev/api/people/43/",
            "http://swapi.dev/api/people/62/"
        ],
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/3/",
            "http://swapi.dev/api/films/4/",
            "http://swapi.dev/api/films/5/",
            "http://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-09T13:50:49.641000Z",
        "edited": "2014-12-20T20:58:18.411000Z",
        "url": "http://swapi.dev/api/planets/1/"
    },
    {
        "name": "Alderaan",
        "rotation_period": "24",
        "orbital_period": "364",
        "diameter": "12500",
        "climate": "temperate",
        "gravity": "1 standard",
        "terrain": "grasslands, mountains",
        "surface_water": "40",
        "population": "2000000000",
        "residents": [
            "http://swapi.dev/api/people/5/",
            "http://swapi.dev/api/people/68/",
            "http://swapi.dev/api/people/81/"
        ],
        "films": [
            "http://swapi.dev/api/films/1/",
            "http://swapi.dev/api/films/6/"
        ],
        "created": "2014-12-10T11:35:48.479000Z",
        "edited": "2014-12-20T20:58:18.420000Z",
        "url": "http://swapi.dev/api/planets/2/"
    },
    {
        "name": "Yavin IV",
        "rotation_period": "24",
        "orbital_period": "4818",
        "diameter": "10200",
        "climate": "temperate, tropical",
        "gravity": "1 standard",
        "terrain": "jungle, rainforests",
        "surface_water": "8",
        "population": "1000",
        "residents": [],
        "films": [
            "http://swapi.dev/api/films/1/"
        ],
        "created": "2014-12-10T11:37:19.144000Z",
        "edited": "2014-12-20T20:58:18.421000Z",
        "url": "http://swapi.dev/api/planets/3/"
    }]

describe('DisplayPlanet', () => {

    // To clear all mocks after every test:
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('renders without crashing', () => {
        shallow(<DisplayPlanetData />);
    });

    it('renders loading indicator', () => {
        const wrapper = shallow(<DisplayPlanetData />);
        expect(wrapper.find({
            isLoaded: false
        }));
        expect(wrapper.text()).toBe('Loading...');
        expect(wrapper.exists('table')).toBe(false)
    });

    it('renders a table when loaded', () => {
        const wrapper = mount(<DisplayPlanetData />);
        wrapper.setState({ isLoaded: true, planets: testPlanets })
        expect(wrapper.exists('table')).toBe(true)
    });

    it('renders the expected number of rows', () => {
        const wrapper = mount(<DisplayPlanetData />);
        wrapper.setState({ isLoaded: true, planets: testPlanets })
        expect(wrapper.find('tbody').find('tr').length).toBe(3)
    })

    it('renders the expected water percentage', () => {
        const wrapper = mount(<DisplayPlanetData />);
        wrapper.setState({ isLoaded: true, planets: testPlanets })
        const tableRow = wrapper.findWhere((n) =>
            n.type() === 'tr' && n.text().includes('Alderaan'))
        expect(tableRow.contains('40%')).toBe(true);
    })


    it('api is called as expected', () => {
        const mockSuccessResponse = { results: testPlanets };
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({ // 3
            json: () => mockJsonPromise,
        });
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

        shallow(<DisplayPlanetData />);
        expect(global.fetch).toHaveBeenCalled();
        expect(global.fetch).toHaveBeenCalledWith("https://swapi.dev/api/planets/");
    })

    fit('loading state persists when api is rejected', () => {
        // const mockSuccessResponse = { error: 'something went wrong..' };
        // const mockJsonPromise = Promise.reject(mockSuccessResponse);
        const mockFetchPromise = Promise.reject('something went wrong..');
        jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    })

    it.todo('planet names are capitalized when expected')
    it.todo('planets are sorted by alphabetically')

    afterEach(jest.resetAllMocks);
})





// .find({ 'data-testid': 'surface_water' }).text()).toBe()