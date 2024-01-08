# Clock Angle

ฟังก์ชันนี้ถูกออกแบบมาเพื่อคำนวณมุมระหว่างเข็มชั่วโมงและเข็มนาทีของนาฬิกาในรูปแบบ hh:mm ที่กำหนด

## ตัวอย่าง

```js
console.log(getClockAngle('09:00')); // Output: 90
console.log(getClockAngle('17:30')); // Output: 15
```

## การทำงาน

1. **แยกส่วนเวลา:** 
    - แยกชั่วโมงและนาทีจากสตริง 'hh:mm'
2. **ตรวจสอบข้อมูลนำเข้า:** 
    - ตรวจสอบว่าชั่วโมงอยู่ในช่วง 0-23 และนาทีอยู่ในช่วง 0-59
3. **ทำให้ชั่วโมงเป็นรูปแบบ 12 ชั่วโมง:** 
    - นำชั่วโมงมาหาร 12 เพื่อให้ได้รูปแบบ 12 ชั่วโมง
4. **คำนวณมุมของเข็มชั่วโมงและนาที:** 
    - คำนวณมุมของเข็มชั่วโมงและนาที
5. **คำนวณความแตกต่างมุม:** 
    - หาความแตกต่างในมุมระหว่างเข็มชั่วโมงและเข็มนาที
6. **ปรับมุมให้น้อยที่สุด:** 
    - ถ้ามุมมากกว่า 180 องศา จะนำมุมที่น้อยที่สุด
7. **คืนค่ามุมที่ได้:** 
    - คืนค่ามุมที่ได้จากการคำนวณ

## ข้อควรระวัง

- กรุณาใส่ข้อมูลเวลาในรูปแบบ 'hh:mm'
- ชั่วโมงควรอยู่ในช่วง 0-23 และนาทีควรอยู่ในช่วง 0-59