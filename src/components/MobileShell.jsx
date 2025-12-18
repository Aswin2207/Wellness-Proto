export default function MobileShell({ children }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 390, width: '100%', minHeight: '100vh' }}>
        {children}
      </div>
    </div>
  )
}
