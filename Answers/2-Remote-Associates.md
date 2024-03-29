# Remote Associates Test

ฟังก์ชันนี้ถูกออกแบบมาเพื่อหาคำที่เป็นส่วนต่อเนื่องของคำที่ซ้ำกันในอาร์เรย์ของคำ phrases และปรับปรุงคำทั้งหมดตามเงื่อนไขที่กำหนด

## ตัวอย่าง

```js
const result = getQuestionPart(['BATHROOM', 'BATH SALTS', 'BLOODBATH']);
console.log(result); // Output: ['ROOM', 'SALTS', 'BLOOD']
```

```js
const result = getQuestionPart(['BEFRIEND', 'GIRLFRIEND', 'FRIENDSHIP']);
console.log(result); // Output: [ 'BE', 'GIRL', 'SHIP' ]
```

## การทำงาน

1. **ตรวจสอบทุกตัวอักษรในคำทั้งหมด:**
    - จัดเก็บทุกตัวอักษรที่ปรากฏใน phrases ลงใน allLetters
    - ใช้ Set เพื่อเก็บตัวอักษรที่ซ้ำกันใน duplicates และตัวอักษรที่ไม่ซ้ำกันใน uniqueLetters
    - แสดงผลลัพธ์
2. **สร้างคำที่ซ้ำกันจาก Set เป็น Array:**
    - แปลง duplicates (Set) เป็น Array
3. **สร้างคำจากตัวอักษรที่ซ้ำกัน:**
    - นำ Array ที่ได้จากขั้นที่ 2 มาเชื่อมต่อกัน
4. **ตรวจสอบว่าตัวอักษรที่ซ้ำกันปรากฏในทุกคำหรือไม่:**
    - กรองเฉพาะตัวอักษรที่ซ้ำกันที่ปรากฏในทุกคำ (validDuplicateLetters)
5. **จัดเรียงตัวอักษรเพื่อหาคำที่เป็นไปได้:**
    - ใช้การเรียกซ้ำ (recursion) ในฟังก์ชัน rearrange เพื่อสร้างคำที่เป็นไปได้จากตัวอักษรที่ซ้ำกัน
6. **ลบคำที่ซ้ำกันและคำที่เป็นไปได้จากคำทั้งหมด:**
    - ในแต่ละคำใน phrases, นำคำที่ซ้ำกันและคำที่เป็นไปได้ทั้งหมดออก
7. **คืนค่าคำที่ได้หลังจากการปรับปรุง:**
    - แสดงผลลัพธ์ที่ได้หลังจากทุกรายการข้างต้นถูกทำ

## ข้อควรระวัง

- คำที่ส่งเข้ามาควรมีรูปแบบเป็นอาร์เรย์ของสตริง
