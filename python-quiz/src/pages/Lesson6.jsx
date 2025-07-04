import React from "react";
import { Link } from "react-router-dom";

export default function Lesson6() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
          <h1>บทเรียนที่ 6: ลูป for</h1>
          <p>ลูป <code>for</code> ใช้สำหรับทำซ้ำโค้ดหลายครั้ง</p>
          
          <div style={{margin:'24px 0'}}>
            <b>ตัวอย่างโค้ด:</b>
            <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`for i in range(5):
    print("รอบที่", i)

# ผลลัพธ์:
# รอบที่ 0
# รอบที่ 1
# รอบที่ 2
# รอบที่ 3
# รอบที่ 4`}</pre>
          </div>
          
          <p><b>ฟังก์ชัน range():</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li><code>range(5)</code> - สร้างลำดับ 0, 1, 2, 3, 4</li>
            <li><code>range(1, 6)</code> - สร้างลำดับ 1, 2, 3, 4, 5</li>
            <li><code>range(0, 10, 2)</code> - สร้างลำดับ 0, 2, 4, 6, 8 (เพิ่มทีละ 2)</li>
            <li>range() จะไม่รวมตัวเลขสุดท้าย</li>
          </ul>
          
          <p><b>การใช้งานลูป for:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li>ใช้กับ range() เพื่อทำซ้ำตามจำนวนครั้ง</li>
            <li>ใช้กับ list เพื่อวนผ่านทุกสมาชิก</li>
            <li>ใช้กับ string เพื่อวนผ่านทุกตัวอักษร</li>
            <li>ต้องย่อหน้า (indent) โค้ดที่อยู่ภายในลูป</li>
          </ul>
          
          <p><b>ตัวอย่างเพิ่มเติม:</b></p>
          <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`# ตัวอย่างที่ 1: คำนวณผลรวม
sum = 0
for i in range(1, 6):
    sum = sum + i
print("ผลรวม 1+2+3+4+5 =", sum)

# ตัวอย่างที่ 2: วนผ่าน list
fruits = ["แอปเปิ้ล", "กล้วย", "ส้ม"]
for fruit in fruits:
    print("ฉันชอบ", fruit)

# ตัวอย่างที่ 3: วนผ่าน string
name = "Python"
for letter in name:
    print(letter)

# ตัวอย่างที่ 4: ลูปซ้อน
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()  # ขึ้นบรรทัดใหม่`}</pre>
          
            <div className="button-group">
              <Link to="/lesson/5"><button>บทก่อนหน้า</button></Link>
              <Link to="/lesson/7"><button>บทถัดไป</button></Link>
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