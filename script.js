const hourEL = document.querySelector(".hour");
const minuteEL = document.querySelector(".minute");
const secondEL = document.querySelector(".second");
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

toggle.addEventListener("click", (e) => {
	const html = document.querySelector("html");
	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		e.target.innerHTML = "Dark mode";
	} else {
		html.classList.add("dark");
		e.target.innerHTML = "Light mode";
	}
});

function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const date = time.getDate();
	const day = time.getDay();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minute = time.getMinutes();
	const second = time.getSeconds();
	const ampm = hours >= 12 ? "PM" : "AM";

	hourEL.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360,
	)}deg)`;
	minuteEL.style.transform = `translate(-50%, -100%) rotate(${scale(
		minute,
		0,
		59,
		0,
		360,
	)}deg)`;
	secondEL.style.transform = `translate(-50%, -100%) rotate(${scale(
		second,
		0,
		59,
		0,
		360,
	)}deg)`;

	timeEL.innerHTML = `${hours} : ${
		minute < 10 ? `0${minute}` : minute
	} ${ampm}`;

	dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
