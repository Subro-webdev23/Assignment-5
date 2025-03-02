



function history(getTitle) {

    const activityLog = document.getElementById("activityLog");
    const p = document.createElement("p");
    p.innerText = `You Have Completed The Task ${getTitle} at ${time}`;
    p.classList.add("text-[13px]", "bg-gray-200", "p-2", "rounded-md", "mt-2");
    activityLog.appendChild(p);
}
