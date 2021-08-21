var objToday = new Date(),
	weekday = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds(),
	curMeridiem = objToday.getHours() > 12 ? "pm" : "am";
var today = curHour + ":" + curMinute + curMeridiem  + " " + dayOfMonth + " " + curMonth ;

export const Box = [
    {
        id:1,
        title: 'Sohaib',
        description: 'Three Eggs With Bag of tomatoes',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Usama',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
       id:2, 
        title: 'Usama',
        description: 'Three Eggs,Laptops',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:3,
        title: 'Ali',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:4,
        title: 'Pasha Khan',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:5,
        title: 'Sohaib',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:6,
        title: 'Sohaib',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:7,
        title: 'Sohaib',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:8,
        title: 'Junaid',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:9,
        title: 'Yasir',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:10,
        title: 'Ali',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
id:11,
        title: 'Hamza',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time: 'Upload Time',
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    }, {
        id:12,
        title: 'Hamza',
        description: 'Description',
        image: require('./images/maxresdefault.png'),
        time:today,
        weight: '100kg',
        Pick: 'Pick Location',
        Drop: 'Drop Location',
        vehicle: 'Recommended vehicle'

    },
]