/**
 * Client logos from the legacy WordPress site (aevenda.com partner scroller).
 * Local copies live under /public/clients/.
 */
export type ClientLogo = {
  name: string;
  src: string;
};

export const clientLogos: ClientLogo[] = [
  { name: "Zain", src: "/clients/zain.png" },
  { name: "UNHCR", src: "/clients/unhcr.png" },
  { name: "Al-Tawuniya", src: "/clients/tawuniya.png" },
  { name: "Tahakom", src: "/clients/tahakom.png" },
  { name: "Tabuk", src: "/clients/tabuk.png" },
  { name: "STC", src: "/clients/stc.png" },
  { name: "Sirar", src: "/clients/sirar.png" },
  { name: "Seven", src: "/clients/seven.png" },
  { name: "Saudi National Bank", src: "/clients/saudi-national-bank.png" },
  { name: "Saudi Investment Bank", src: "/clients/saudi-investment-bank.png" },
  { name: "Saudi Chemical", src: "/clients/saudi-chemical.png" },
  { name: "SAL", src: "/clients/sal.png" },
  { name: "SAB", src: "/clients/sab.png" },
  { name: "SAB Invest", src: "/clients/sab-invest.png" },
  { name: "Riyad Bank", src: "/clients/riyad-bank.png" },
  { name: "Noon", src: "/clients/noon.png" },
  { name: "Najm", src: "/clients/najm.png" },
  { name: "Mobily", src: "/clients/mobily.png" },
  { name: "Merz", src: "/clients/merz.png" },
  { name: "IoT", src: "/clients/iot.png" },
  { name: "Hikma", src: "/clients/hikma.png" },
  { name: "Center3", src: "/clients/center3.png" },
  { name: "Beurer", src: "/clients/beurer.png" },
  { name: "Bank Albilad", src: "/clients/bank-albilad.png" },
  { name: "Auth", src: "/clients/auth.png" },
  { name: "Arabio", src: "/clients/arabio.png" },
  { name: "Apotex", src: "/clients/apotex.png" },
  { name: "Almarai", src: "/clients/almarai.png" },
  { name: "ACWA Power", src: "/clients/acwa-power.png" },
];

export function getClientLogos(): ClientLogo[] {
  return clientLogos;
}
