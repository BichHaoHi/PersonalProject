import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client'
import './EmbedDashboard.css';


function EmbedDashboard({ product, onBack }) {
  return (
    <div className="App">
      <button onClick={onBack} style={{ margin: '10px', padding: '6px 12px' }}>⬅ Quay lại</button>
      <h2>Dashboard 1: {product ? product.name : 'Chưa chọn'}</h2>

      {/* Main */}
      <main className="main-content">
      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: 'e6469ce7-c6f2-4d90-873b-a06455666810',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=e6469ce7-c6f2-4d90-873b-a06455666810&groupId=a82ae675-c2d3-4e17-9fc2-bb4674391618&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1ELVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
          accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSIsImtpZCI6IkNOdjBPSTNSd3FsSEZFVm5hb01Bc2hDSDJYRSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMmM0YTJmNjEtNTk5Mi00YmY0LWEzNWYtYmFhNzU5MDgwNGQ1LyIsImlhdCI6MTc0ODY3MjQ4MiwibmJmIjoxNzQ4NjcyNDgyLCJleHAiOjE3NDg2NzcyODcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBWFFBaS84WkFBQUEvQmxObEoyUkJCWE5OcnRIQ0lrdWlzYXg5RDdCMi9sckRoVXppekNSU0dKMDd2bGNmNHZzQjduNU5EWFUxMDNkU1ZkekZiRlhqbklySlE3T1FvcnNCdnRidUtXRERPb2l0d1ByVFk1S3NQSUw2T05VN251eXdacWZUL2l5bjFPWmIzcUdtcjJZVWdmekZGRmFaRk53a2c9PSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiI4NzFjMDEwZi01ZTYxLTRmYjEtODNhYy05ODYxMGE3ZTkxMTAiLCJhcHBpZGFjciI6IjAiLCJpZHR5cCI6InVzZXIiLCJpcGFkZHIiOiIyNDA1OjQ4MDI6OTAzZTphZmUwOjkxYzA6YTgyYzo2N2IzOmIyMjEiLCJuYW1lIjoiQmljaCBIYW8iLCJvaWQiOiJjMTI1YWE5ZC02ZDA5LTRkYzEtOTdjMC01ZmFkNTg4OTNiYmIiLCJwdWlkIjoiMTAwMzIwMDNGQ0ExQTE0RiIsInJoIjoiMS5BY1lBWVM5S0xKSlo5RXVqWDdxbldRZ0UxUWtBQUFBQUFBQUF3QUFBQUFBQUFBREdBTHpHQUEuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lkIjoiMDA1MTBlMTktMjg5OS00NjY2LWZmNDUtMWQyNjI2YzIyZTYzIiwic3ViIjoiVHNZMG9LdFQ4NjBwbndRSkFla0ljNENpeDdseDMtU3RoOWZJajNVQ3hLNCIsInRpZCI6IjJjNGEyZjYxLTU5OTItNGJmNC1hMzVmLWJhYTc1OTA4MDRkNSIsInVuaXF1ZV9uYW1lIjoiYmhhb0BsZXF1YW5na2hhaXVpdGdtYWlsLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6ImJoYW9AbGVxdWFuZ2toYWl1aXRnbWFpbC5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJub0dlSFBDZGlFS1dBX1hka0xOSEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCI5Yjg5NWQ5Mi0yY2QzLTQ0YzctOWQwMi1hNmFjMmQ1ZWE1YzMiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2Z0ZCI6IlJEcFNNNnpJZmo0ME95YkxhcGtkME1kV3ZteGNHdF95MzR1MzVNU0Z3TDBCYTI5eVpXRmpaVzUwY21Gc0xXUnpiWE0iLCJ4bXNfaWRyZWwiOiIxIDI0In0.HIBl0tUqGOqbFOp3nieCB-Qkbjd-Nj8yX4-lBybuMCaqGR68HVTuLfal8S8PXl42A0CbppR9Edq40ahg0KXy6xBkc7jgxDRoL-rad2TjXvb0S4UC_wnnEVOUtWbOSk4f_MxJ19X85cl9Bq0j3Fy_eL9BQWhHCH060a2dCUxKPt2sdO_OuS1W3HVx1vTvXOrynSXYlVSd3dgR3ZaIB3-jHTFhs0uO_NrMQW_Nl-vpmeE0YSl48MjM401vgOEBhxYQ_mG_No-zv6mbudiQ7H6-XVJ3Ko9zkI_4XSfYAWexZ_j63bq0FetyE9ACNScLp3L0qupBsZOKWhIZBTRwkqvpuA',
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}

        eventHandlers={
          new Map([
            ['loaded', function () { console.log('Report loaded'); }],
            ['rendered', function () { console.log('Report rendered'); }],
            ['error', function (event) { console.log(event.detail); }],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log(event)],
          ])
        }

        cssClassName={"reportClass"}

        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </main>

      {/* Footer */}
      <footer className="footer">
        <p>Phone Number: 0347743943</p>
        <p>Email: ntbichhao.work@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/h%E1%BA%A3o-b%C3%ADch-40b403294/" target="_blank" rel="noopener noreferrer">BichHao</a></p>
      </footer>
    </div>
  );
}

export default EmbedDashboard;