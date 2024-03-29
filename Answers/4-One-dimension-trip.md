# One Dimension Trip

ฟังก์ชันนี้ถูกออกแบบมาเพื่อคำนวณพลังงานที่น้อยที่สุดที่ต้องใช้เมื่อต้องการเดินทางไปยังร้านค้าต่าง ๆ โดยมีจุดเริ่มต้นที่กำหนด, ตำแหน่งของร้านค้า, ตำแหน่งของสถานนีรถประจำทาง, และจุดปลายทาง

## ตัวอย่าง

```js
const result = minEnergy(0, [4, 9], [3, 6, 8], 11);
console.log(`Total energy needed: ${result}`); // Output: 8
```

```js
const shops = [4, 9];
const stations = [3, 6, 8];
const result = minEnergy(0, shops, stations, 11);
console.log(`Total energy needed: ${result}`); // Output: 8
```

## การทำงาน

1. **เรียงลำดับร้านค้าและสถานนีรถประจำทาง:**
    - เรียงลำดับตำแหน่งร้านค้าและสถานนีรถประจำทางจากน้อยไปหามาก
2. **กำหนดค่าเริ่มต้น:**
    - กำหนดค่าพลังงานเริ่มต้นเป็น 0
    - กำหนดตำแหน่งปัจจุบันเป็นตำแหน่งเริ่มต้น
3. **เยี่ยมชมร้านค้าทุกร้าน:**
    - สำหรับแต่ละร้านค้า, คำนวณระยะทางระหว่างตำแหน่งปัจจุบันและร้านค้า
    - หาระยะทางระหว่างตำแหน่งปัจจุบันและทุกสถานนีรถประจำทาง
    - หาสถานนีรถประจำทางที่ใกล้ที่สุด
    - ตรวจสอบว่าการใช้สถานนีรถประจำทางเป็นที่ประหยัดพลังงานหรือไม่
    - ปรับปริมาณพลังงานตามที่ใช้
4. **คำนวณพลังงานที่ต้องใช้เพื่อไปยังจุดปลายทาง:**
    - คำนวณระยะทางระหว่างตำแหน่งปัจจุบันและจุดปลายทาง
    - ปรับปริมาณพลังงานตามที่ใช้
5. **คืนค่าผลลัพธ์:**
    - คืนค่าจำนวนพลังงานทั้งหมดที่ต้องใช้

## ข้อควรระวัง

- ต้องใช้ข้อมูลที่ถูกเรียงลำดับทั้งในร้านค้าและสถานนีรถประจำทาง
- ผลลัพธ์อาจจะไม่สามารถประมาณค่าพลังงานที่ต้องใช้ได้ในบางกรณี
