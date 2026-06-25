function calculateMarks() {
    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);
    let s5 = Number(document.getElementById("sub5").value);

    // Validation
    if (
        s1 > 100 || s2 > 100 || s3 > 100 ||
        s4 > 100 || s5 > 100 ||
        s1 < 0 || s2 < 0 || s3 < 0 ||
        s4 < 0 || s5 < 0
    ) {
        document.getElementById("result").innerHTML =
            "Please enter marks between 0 and 100.";
        return;
    }

    let total = s1 + s2 + s3 + s4 + s5;
    let percentage = (total / 500) * 100;

    let grade;

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("result").innerHTML = `
        <strong>Total Marks:</strong> ${total}/500 <br>
        <strong>Percentage:</strong> ${percentage.toFixed(2)}% <br>
        <strong>Grade:</strong> ${grade}
    `;
}