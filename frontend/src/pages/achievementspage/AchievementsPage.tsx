import { Button } from "@/components/ui/button"

const AchievementsPage = () => {
  return (
      <div className="md:flex md:flex-col md:space-y-0 justify-center mt-5">
        <h1 className="text-3xl pb-3">Achievements</h1>
        <div className="space-y-4 grid md:grid-cols-4 gap-6">
            <section className="md:min-w-70 h-68 text-center relative group">
                <img src="/SalesforceCertificate.png" alt="" className="w-75 h-50" />
                <h1>Salesforce Virtual Internship</h1>
                <p className="text-sm text-neutral-400">Salesforce Supported Virtual Internship Program 2025</p>
                    <a href="https://philippines.myskillwallet.ai/dashboard/skillwallet/module/salesforce-developer-6788e9959d8d1ce2e912698c?moduleTab=certificate" target="_blank">
                        <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                        md:opacity-0 md:group-hover:opacity-100">
                            Show credential
                        </Button>
                    </a>
            </section>

            <section className="md:min-w-70 h-68 text-center relative group">
                <img src="/NetworkingBasicsCertificate.png" alt="" className="w-75" />
                    <h1>Networking Basics</h1>
                    <p className="text-sm text-neutral-400">CISCO Networking Academy</p>
                    <a href="https://www.netacad.com/certificates?issuanceId=fb167e72-b394-45c2-80d9-809cd9d41c32" target="_blank">
                        <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                        md:opacity-0 md:group-hover:opacity-100">
                            Show credential
                        </Button>
                    </a>
            </section>

            <section className="md:min-w-70 h-68 text-center relative group">
                <img src="/ComputerHardwareBasicsCertificate.png" alt="" className="w-75" />
                    <h1>Computer Hardware Basics</h1>
                    <p className="text-sm text-neutral-400">CISCO Networking Academy</p>
                    <a href="https://www.netacad.com/certificates?issuanceId=93ecd99a-90e1-49ff-acb3-3d656802c3c8" target="_blank">
                        <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                        md:opacity-0 md:group-hover:opacity-100">
                            Show credential
                        </Button>
                    </a>
            </section>

            <section className="md:min-w-70 h-68 text-center relative group">
                <img src="/NetworkingDevicesAndInitialConfigurationCertificate.png" alt="" className="w-75" />
                    <h1>Networking Devices & Initial Configuration</h1>
                    <p className="text-sm text-neutral-400">CISCO Networking Academy</p>
                    <a href="https://www.netacad.com/certificates?issuanceId=fe5ffecd-9ab3-42d9-9a54-2c0bbccb73c5" target="_blank">
                        <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                        md:opacity-0 md:group-hover:opacity-100">
                            Show credential
                        </Button>
                    </a>
            </section>

            <section className="md:min-w-70 h-68 text-center relative group">
                <img src="/NetworkAddressingAndBasicTroubleshootingCertificate.png" alt="" className="w-75" />
                    <h1>Networking Addressing & Basic Troubleshooting</h1>
                    <p className="text-sm text-neutral-400">CISCO Networking Academy</p>
                    <a href="https://www.netacad.com/certificates?issuanceId=a48ef93e-dfb0-4055-92a6-3d86f85d21e4" target="_blank">
                        <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                        md:opacity-0 md:group-hover:opacity-100">
                            Show credential
                        </Button>
                    </a>
            </section>

            <section className="md:min-w-70 h-68 text-center relative group">
                <img src="/NetworkSupportAndSecurityCertificate.png" alt="" className="w-75" />
                    <h1>Network Support & Security</h1>
                    <p className="text-sm text-neutral-400">CISCO Networking Academy</p>
                    <a href="https://www.netacad.com/certificates?issuanceId=d84b6b0f-d444-48f6-8eae-cbd9838adcc4" target="_blank">
                        <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                        md:opacity-0 md:group-hover:opacity-100">
                            Show credential
                        </Button>
                    </a>
            </section>

            <section className="md:min-w-70 h-68 text-center relative group">
                <img src="/iLeapCertificate.png" alt="" className="w-75 h-50" />
                <h1>iLEAP course on Intellectual Property</h1>
                <p className="text-sm text-neutral-400">Intellectual Property Office of the Philippines (IPOPHL)</p>
                    <a href="https://ilaw.ipophil.gov.ph/mod/customcert/my_certificates.php?userid=18843&certificateid=122&downloadcert=1" target="_blank">
                        <Button className="absolute bottom-23 left-3 w-30 text-white bg-neutral-600 hover:bg-neutral-950
                        md:opacity-0 md:group-hover:opacity-100">
                            Show credential
                        </Button>
                    </a>
            </section>
        </div>
      </div>
  )
}

export default AchievementsPage