import React from "react";
import { Link } from "react-router-dom";

export default function Lesson5() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
          <h1>บทเรียนที่ 5: คำสั่ง if / else</h1>
          <p>คำสั่ง <code>if</code> และ <code>else</code> ใช้สำหรับการตัดสินใจในโปรแกรม</p>
          
          <div style={{margin:'24px 0'}}>
            <b>ตัวอย่างโค้ด:</b>
            <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`age = int(input("กรอกอายุของคุณ: "))

if age >= 18:
    print("คุณบรรลุนิติภาวะแล้ว")
else:
    print("คุณยังไม่บรรลุนิติภาวะ")`}</pre>
          </div>
          
          <p><b>โครงสร้าง if/else:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li><code>if เงื่อนไข:</code> - ตรวจสอบเงื่อนไข</li>
            <li><code>elif เงื่อนไข:</code> - ตรวจสอบเงื่อนไขอื่น (ถ้า if เป็นเท็จ)</li>
            <li><code>else:</code> - ทำเมื่อเงื่อนไขทั้งหมดเป็นเท็จ</li>
            <li>ต้องย่อหน้า (indent) โค้ดที่อยู่ภายใน</li>
          </ul>
          
          <p><b>เครื่องหมายเปรียบเทียบ:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li><code>==</code> - เท่ากับ</li>
            <li><code>!=</code> - ไม่เท่ากับ</li>
            <li><code>&gt;</code> - มากกว่า</li>
            <li><code>&lt;</code> - น้อยกว่า</li>
            <li><code>&gt;=</code> - มากกว่าหรือเท่ากับ</li>
            <li><code>&lt;=</code> - น้อยกว่าหรือเท่ากับ</li>
          </ul>
          
          <p><b>ตัวอย่างเพิ่มเติม:</b></p>
          <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`# ตัวอย่างที่ 1: ตรวจสอบคะแนน
score = int(input("กรอกคะแนน: "))

if score >= 80:
    print("เกรด A")
elif score >= 70:
    print("เกรด B")
elif score >= 60:
    print("เกรด C")
else:
    print("เกรด F")

# ตัวอย่างที่ 2: ตรวจสอบจำนวนคู่/คี่
number = int(input("กรอกจำนวน: "))

if number % 2 == 0:
    print("จำนวนคู่")
else:
    print("จำนวนคี่")`}</pre>
          
            <div className="button-group">
              <Link to="/lesson/4"><button>บทก่อนหน้า</button></Link>
              <Link to="/lesson/6"><button>บทถัดไป</button></Link>
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