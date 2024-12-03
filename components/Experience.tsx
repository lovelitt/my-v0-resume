export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">경력</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium">시니어 웹 개발자 - ABC 기술</h3>
          <p className="text-gray-600">2020년 3월 - 현재</p>
          <ul className="list-disc list-inside mt-2">
            <li>대규모 웹 애플리케이션 아키텍처 설계 및 개발</li>
            <li>주니어 개발자 멘토링 및 팀 리드</li>
            <li>성능 최적화를 통한 웹사이트 로딩 시간 50% 감소</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">웹 개발자 - XYZ 솔루션즈</h3>
          <p className="text-gray-600">2017년 6월 - 2020년 2월</p>
          <ul className="list-disc list-inside mt-2">
            <li>반응형 웹사이트 개발 및 유지보수</li>
            <li>RESTful API 설계 및 구현</li>
            <li>클라이언트 요구사항 분석 및 기술적 해결책 제안</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

