import React from "react";
import { Link } from "react-router-dom";

export default function Lesson4() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
            <h1>บทเรียนที่ 4: การคำนวณพื้นฐาน</h1>
            <p>Python มีเครื่องหมายทางคณิตศาสตร์พื้นฐานสำหรับการคำนวณ</p>
            
            <div style={{margin:'24px 0'}}>
              <b>ตัวอย่างโค้ด:</b>
              <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`a = 10
b = 3

print("a + b =", a + b)    # 13
print("a - b =", a - b)    # 7
print("a * b =", a * b)    # 30
print("a / b =", a / b)    # 3.333...
print("a // b =", a // b)  # 3
print("a % b =", a % b)    # 1`}</pre>
            </div>
            
            <p><b>เครื่องหมายทางคณิตศาสตร์:</b></p>
            <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
              <li><code>+</code> - การบวก</li>
              <li><code>-</code> - การลบ</li>
              <li><code>*</code> - การคูณ</li>
              <li><code>/</code> - การหาร (ผลลัพธ์เป็น float)</li>
              <li><code>//</code> - การหารแบบปัดเศษลง (ผลลัพธ์เป็น int)</li>
              <li><code>%</code> - การหารเอาเศษ (modulo)</li>
              <li><code>**</code> - การยกกำลัง</li>
            </ul>
            
            <p><b>ลำดับการคำนวณ (Operator Precedence):</b></p>
            <ol style={{fontSize:'1.2rem',margin:'24px 0'}}>
              <li><code>()</code> - วงเล็บ (สูงสุด)</li>
              <li><code>**</code> - ยกกำลัง</li>
              <li><code>*</code>, <code>/</code>, <code>//</code>, <code>%</code> - คูณ/หาร</li>
              <li><code>+</code>, <code>-</code> - บวก/ลบ (ต่ำสุด)</li>
            </ol>
            
            <p><b>ตัวอย่างเพิ่มเติม:</b></p>
            <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`# การยกกำลัง
print("2 ** 3 =", 2 ** 3)  # 8

# การใช้วงเล็บ
print("(2 + 3) * 4 =", (2 + 3) * 4)  # 20

# การหารเอาเศษ
print("17 % 5 =", 17 % 5)  # 2

# การหารแบบปัดเศษลง
print("17 // 5 =", 17 // 5)  # 3`}</pre>
            
            <div className="button-group">
              <Link to="/lesson/3"><button>บทก่อนหน้า</button></Link>
              <Link to="/lesson/5"><button>บทถัดไป</button></Link>
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