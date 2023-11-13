// npm i use-places-autocomplete
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import Input from '../../component/input';

function PlacesAutoComplete({ handleSearchLocation }) {

    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions
    } = usePlacesAutocomplete();

    const handleSelectLocation = async (address) => {
        console.log(address);

        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = getLatLng(results[0]);
        // console.log({ lat, lng })

        handleSearchLocation({ lat, lng });
    };

    if (!ready) return null;

    return (
        <div >
            <Input
                value={value}
                disabled={!ready}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className='absolute bg-white w-full mt-1 shadow-lg'>
                {status === 'OK' && data.map(({ place_id, description }) => {
                    return (
                        <div key={place_id}
                            className=' overflow-auto'
                            onClick={() => handleSelectLocation(description)}
                        >
                            {description}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default PlacesAutoComplete;