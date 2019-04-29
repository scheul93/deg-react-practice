import data from '../../assets/doctors';
// load json once
let doctorData;

function loadDoctorData() {
    return data.results;
}

function matchesGender(doctor, genderVal) {
    if (genderVal === 'all') {
        return true;
    }
    return doctor.gender && doctor.gender.toLowerCase() === genderVal;
}

function matchesDistance(doctor, distanceVal) {
    if (distanceVal) {
        const locationInDistance = doctor.locations.find(location => location.distance < distanceVal);
        return locationInDistance !== undefined;
    }
    return true;
}

function search(props) {
    if (!doctorData) {
        doctorData = loadDoctorData();
    }
    return doctorData.filter(doctor => {
        return matchesGender(doctor, props.gender.value) && matchesDistance(doctor, props.distance.value);
    })
}

export default {
    search
}