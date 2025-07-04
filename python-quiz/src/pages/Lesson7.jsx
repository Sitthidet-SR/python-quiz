import React from "react";
import { Link } from "react-router-dom";

export default function Lesson7() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
          <h1>บทเรียนที่ 7: ลูป while</h1>
          <p>ลูป <code>while</code> ใช้สำหรับทำซ้ำโค้ดตราบใดที่เงื่อนไขเป็นจริง</p>
          
          <div style={{margin:'24px 0'}}>
            <b>ตัวอย่างโค้ด:</b>
            <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`count = 1
while count <= 5:
    print("รอบที่", count)
    count = count + 1

# ผลลัพธ์:
# รอบที่ 1
# รอบที่ 2
# รอบที่ 3
# รอบที่ 4
# รอบที่ 5`}</pre>
          </div>
          
          <p><b>โครงสร้าง while:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li><code>while เงื่อนไข:</code> - ทำซ้ำตราบใดที่เงื่อนไขเป็นจริง</li>
            <li>ต้องมีตัวแปรที่เปลี่ยนค่าในลูป (เพื่อให้ลูปหยุดได้)</li>
            <li>ต้องย่อหน้า (indent) โค้ดที่อยู่ภายในลูป</li>
            <li>ระวัง infinite loop (ลูปไม่สิ้นสุด)</li>
          </ul>
          
          <p><b>ความแตกต่างระหว่าง for และ while:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li><code>for</code> - ใช้เมื่อรู้จำนวนรอบที่แน่นอน</li>
            <li><code>while</code> - ใช้เมื่อไม่รู้จำนวนรอบ แต่มีเงื่อนไขการหยุด</li>
            <li><code>while</code> - ยืดหยุ่นกว่า แต่ต้องระวัง infinite loop</li>
          </ul>
          
          <p><b>ตัวอย่างเพิ่มเติม:</b></p>
          <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`# ตัวอย่างที่ 1: รับข้อมูลจนกว่าจะใส่ 0
sum = 0
while True:
    num = int(input("กรอกจำนวน (ใส่ 0 เพื่อหยุด): "))
    if num == 0:
        break
    sum = sum + num
print("ผลรวม =", sum)

# ตัวอย่างที่ 2: while พร้อมเงื่อนไข
password = "1234"
attempts = 0
while attempts < 3:
    user_input = input("กรอกรหัสผ่าน: ")
    if user_input == password:
        print("เข้าสู่ระบบสำเร็จ!")
        break
    else:
        attempts = attempts + 1
        print("รหัสผ่านผิด! เหลือ", 3 - attempts, "ครั้ง")
else:
    print("ล็อกอินล้มเหลว!")

# ตัวอย่างที่ 3: while ถอยหลัง
i = 10
while i > 0:
    print(i, end=" ")
    i = i - 1
print("Blast off!")`}</pre>
          
            <div className="button-group">
              <Link to="/lesson/6"><button>บทก่อนหน้า</button></Link>
              <Link to="/lesson/8"><button>บทถัดไป</button></Link>
              <Link to="/quiz"><button>ไปเล่นเกมตอบคำถาม</button></Link>
            </div>
          </div>
          
          {/* วิดีโอด้านขวา */}
          <div style={{flex: 1, minWidth: 260, display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
            <div style={{width: '100%', maxWidth: 480}}>
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 18, boxShadow: '0 2px 16px rgba(37,99,235,0.10)'}}>
                <iframe
                  src="https://www.youtube.com/embed/WV-L1drsXs4"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: 18}}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 