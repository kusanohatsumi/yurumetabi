import { sub, share_btn } from "@/style/color";

export default function ShareHistory() {
  return (
    <>
      <p style={shareHistoryTitle}>シェア履歴</p>
    </>
  );
}

const shareHistoryTitle = {
  borderRadius: "8px",
  backgroundColor: sub,
  padding: "6px 12px",
  fontSize: "14px",
  color: share_btn,
  textAlign: "center",
  lineHeight: "20px",
  letterSpacing: "-0.5px",
};
