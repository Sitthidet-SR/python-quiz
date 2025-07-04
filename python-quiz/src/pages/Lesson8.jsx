import React from "react";
import { Link } from "react-router-dom";

export default function Lesson8() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
          <h1>บทเรียนที่ 8: ฟังก์ชัน</h1>
          <p>ฟังก์ชันคือกลุ่มของโค้ดที่ทำงานเฉพาะอย่าง สามารถเรียกใช้ซ้ำได้</p>
          
          <div style={{margin:'24px 0'}}>
            <b>ตัวอย่างโค้ด:</b>
            <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`def greet(name):
    print("สวัสดี", name)

# เรียกใช้ฟังก์ชัน
greet("สมชาย")
greet("สมหญิง")

# ผลลัพธ์:
# สวัสดี สมชาย
# สวัสดี สมหญิง`}</pre>
          </div>
          
          <p><b>โครงสร้างฟังก์ชัน:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li><code>def ชื่อฟังก์ชัน(พารามิเตอร์):</code> - ประกาศฟังก์ชัน</li>
            <li><code>return ค่า</code> - ส่งค่ากลับจากฟังก์ชัน</li>
            <li>ต้องย่อหน้า (indent) โค้ดที่อยู่ภายในฟังก์ชัน</li>
            <li>ฟังก์ชันต้องถูกประกาศก่อนเรียกใช้</li>
          </ul>
          
          <p><b>ประเภทของฟังก์ชัน:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li>ฟังก์ชันที่ไม่มีพารามิเตอร์</li>
            <li>ฟังก์ชันที่มีพารามิเตอร์</li>
            <li>ฟังก์ชันที่ส่งค่ากลับ</li>
            <li>ฟังก์ชันที่มีค่าเริ่มต้น (default value)</li>
          </ul>
          
          <p><b>ตัวอย่างเพิ่มเติม:</b></p>
          <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`# ตัวอย่างที่ 1: ฟังก์ชันคำนวณ
def add(a, b):
    return a + b

result = add(5, 3)
print("5 + 3 =", result)

# ตัวอย่างที่ 2: ฟังก์ชันที่มีค่าเริ่มต้น
def greet(name="ผู้ใช้"):
    print("สวัสดี", name)

greet()        # สวัสดี ผู้ใช้
greet("สมชาย") # สวัสดี สมชาย

# ตัวอย่างที่ 3: ฟังก์ชันตรวจสอบจำนวนคู่/คี่
def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False

print("10 เป็นจำนวนคู่:", is_even(10))
print("7 เป็นจำนวนคู่:", is_even(7))

# ตัวอย่างที่ 4: ฟังก์ชันคำนวณพื้นที่สี่เหลี่ยม
def rectangle_area(width, height):
    area = width * height
    return area

area = rectangle_area(5, 3)
print("พื้นที่สี่เหลี่ยม =", area)`}</pre>
          
            <div className="button-group">
              <Link to="/lesson/7"><button>บทก่อนหน้า</button></Link>
              <Link to="/lesson/9"><button>บทถัดไป</button></Link>
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