function getClockAngle(hh_mm: string): number {
  // Split the input string into hours and minutes
  const [hours, minutes] = hh_mm.split(':').map(Number);

  // Validate input
  if (hours < 0 || hours >= 24 || minutes < 0 || minutes >= 60) {
    throw new Error(
      'Invalid input. Please provide a valid time in hh:mm format.'
    );
  }

  // Normalize the hours to a 12-hour format
  const normalizedHours = hours % 12;

  // Calculate the angles of the hour and minute hands
  const hourAngle = 0.5 * (60 * normalizedHours + minutes);
  const minuteAngle = 6 * minutes;

  // Calculate the absolute difference between the angles
  let angle = Math.abs(hourAngle - minuteAngle);

  // Ensure the smaller angle is considered
  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}

// Examples
console.log(getClockAngle('09:00')); // Output: 90
console.log(getClockAngle('17:30')); // Output: 15
