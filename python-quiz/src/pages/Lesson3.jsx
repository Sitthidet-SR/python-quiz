import React from "react";
import { Link } from "react-router-dom";

export default function Lesson3() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
            <h1>บทเรียนที่ 3: การแสดงผลด้วย print()</h1>
            <p>ฟังก์ชัน <code>print()</code> ใช้สำหรับแสดงผลข้อความหรือค่าตัวแปรออกทางหน้าจอ</p>
            
            <div style={{margin:'24px 0'}}>
              <b>ตัวอย่างโค้ด:</b>
              <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`print("ชื่อ:", name)
print("อายุ:", age, "ปี")`}</pre>
            </div>
            
            <p><b>วิธีการใช้ print():</b></p>
            <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
              <li><code>print("ข้อความ")</code> - แสดงข้อความธรรมดา</li>
              <li><code>print(ตัวแปร)</code> - แสดงค่าตัวแปร</li>
              <li><code>print("ข้อความ", ตัวแปร)</code> - แสดงข้อความและค่าตัวแปร</li>
              <li><code>print("ข้อความ", ตัวแปร, "ข้อความ")</code> - แสดงหลายอย่างพร้อมกัน</li>
            </ul>
            
            <p><b>ตัวอย่างผลลัพธ์:</b></p>
            <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`ชื่อ: Jack
อายุ: 25 ปี`}</pre>
            
            <p><b>เทคนิคการใช้งาน:</b></p>
            <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
              <li>ใช้ <code>sep=""</code> เพื่อกำหนดตัวคั่นระหว่างข้อมูล</li>
              <li>ใช้ <code>end=""</code> เพื่อกำหนดตัวสิ้นสุดบรรทัด</li>
              <li>สามารถแสดงผลได้หลายบรรทัดในครั้งเดียว</li>
            </ul>
            
            <div className="button-group">
              <Link to="/lesson/2"><button>บทก่อนหน้า</button></Link>
              <Link to="/lesson/4"><button>บทถัดไป</button></Link>
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