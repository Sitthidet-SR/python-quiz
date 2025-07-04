import React from "react";
import { Link } from "react-router-dom";

export default function Lesson9() {
  return (
    <div style={{minHeight: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'flex-start'}}>
      <div className="content-inner" style={{maxWidth: 1100, margin: '40px auto', padding: '32px 24px', borderRadius: 32, width: '100%'}}>
        <div style={{display: 'flex', gap: '32px', maxWidth: '1400px', margin: '0 auto', padding: '24px'}}>
          {/* เนื้อหาด้านซ้าย */}
          <div style={{flex: 1, minWidth: 260}}>
          <h1>บทเรียนที่ 9: สรุปและทบทวน</h1>
          <p>สรุปเนื้อหาที่เรียนทั้งหมดในบทเรียน Python พื้นฐาน</p>
          
          <div style={{margin:'24px 0'}}>
            <b>สรุปเนื้อหาที่เรียน:</b>
            <div style={{background:'#f1f5f9',padding:16,borderRadius:8,marginTop:16}}>
              <h3>📚 บทเรียนที่ 1-3: พื้นฐาน</h3>
              <ul style={{fontSize:'1.1rem',margin:'16px 0'}}>
                <li><strong>ตัวแปรและชนิดข้อมูล:</strong> การประกาศตัวแปร, ชนิดข้อมูล int, float, string, boolean</li>
                <li><strong>การแสดงผล print():</strong> การแสดงผลข้อความ, การจัดรูปแบบ, การใช้ end และ sep</li>
                <li><strong>รับค่าจากผู้ใช้ input():</strong> การรับข้อมูล, การแปลงชนิดข้อมูล</li>
              </ul>
              
              <h3>📚 บทเรียนที่ 4-5: การคำนวณและการตัดสินใจ</h3>
              <ul style={{fontSize:'1.1rem',margin:'16px 0'}}>
                <li><strong>การคำนวณพื้นฐาน:</strong> เครื่องหมาย +, -, *, /, //, %, **, ลำดับการคำนวณ</li>
                <li><strong>คำสั่ง if/else:</strong> การตัดสินใจ, elif, เครื่องหมายเปรียบเทียบ</li>
              </ul>
              
              <h3>📚 บทเรียนที่ 6-7: ลูป</h3>
              <ul style={{fontSize:'1.1rem',margin:'16px 0'}}>
                <li><strong>ลูป for:</strong> การใช้ range(), การวนผ่าน list และ string</li>
                <li><strong>ลูป while:</strong> การทำซ้ำตามเงื่อนไข, การหลีกเลี่ยง infinite loop</li>
              </ul>
              
              <h3>📚 บทเรียนที่ 8: ฟังก์ชัน</h3>
              <ul style={{fontSize:'1.1rem',margin:'16px 0'}}>
                <li><strong>ฟังก์ชัน:</strong> การประกาศฟังก์ชัน, พารามิเตอร์, return, ค่าเริ่มต้น</li>
              </ul>
            </div>
          </div>
          
          <div style={{margin:'24px 0'}}>
            <b>ตัวอย่างโค้ด:</b>
            <pre style={{background:'#fff',color:'#18181b',padding:16,borderRadius:12,fontFamily:'Fira Mono,monospace',fontSize:'1.08rem',boxShadow:'0 2px 8px rgba(37,99,235,0.06)',border:'1.5px solid #e0e7ef',fontWeight:600,letterSpacing:0.5}}>{`# โปรแกรมคำนวณเกรดแบบครอบวงจร
def calculate_grade(score):
    if score >= 80:
        return "A"
    elif score >= 70:
        return "B"
    elif score >= 60:
        return "C"
    else:
        return "F"

def get_student_info():
    name = input("กรอกชื่อนักเรียน: ")
    scores = []
    
    for i in range(3):
        score = float(input(f"กรอกคะแนนวิชาที่ {i+1}: "))
        scores.append(score)
    
    return name, scores

def main():
    print("=== โปรแกรมคำนวณเกรด ===")
    
    name, scores = get_student_info()
    average = sum(scores) / len(scores)
    grade = calculate_grade(average)
    
    print(f"\nนักเรียน: {name}")
    print(f"คะแนนเฉลี่ย: {average:.2f}")
    print(f"เกรด: {grade}")

# เรียกใช้โปรแกรม
main()`}</pre>
          </div>
          
          <p><b>คำแนะนำสำหรับการเรียนต่อ:</b></p>
          <ul style={{fontSize:'1.2rem',margin:'24px 0'}}>
            <li>ฝึกเขียนโปรแกรมบ่อยๆ เพื่อให้เข้าใจมากขึ้น</li>
            <li>ลองแก้ไขปัญหาเล็กๆ น้อยๆ ด้วย Python</li>
            <li>ศึกษาหัวข้อเพิ่มเติม เช่น List, Dictionary, File I/O</li>
            <li>ลองทำโปรเจกต์เล็กๆ เพื่อประยุกต์ความรู้</li>
          </ul>
          
            <div className="button-group">
              <Link to="/lesson/8"><button>บทก่อนหน้า</button></Link>
              <Link to="/"><button>กลับหน้าหลัก</button></Link>
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