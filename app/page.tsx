'use client'

import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'growth' | 'signs'>('growth')

  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Mandibular Growth & Suture Biology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding forward mandibular growth potential and the signs of open sutures
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab('growth')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'growth'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Growth Potential
          </button>
          <button
            onClick={() => setActiveTab('signs')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'signs'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Signs of Open Sutures
          </button>
        </div>

        {activeTab === 'growth' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Can the Mandible Grow Forward if Sutures Are Open?
              </h2>

              <div className="prose prose-lg max-w-none">
                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                  <p className="text-lg font-semibold text-green-900 mb-2">
                    Yes, but with important limitations
                  </p>
                  <p className="text-gray-700">
                    When cranial and facial sutures remain patent (open), there is potential for mandibular adaptation and positional changes, but true mandibular forward growth is more limited than people often think.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Growth Potential Breakdown</h3>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-900 mb-3">1. Maxillary Forward Growth (Primary Driver)</h4>
                    <p className="text-gray-700 mb-3">
                      Open sutures primarily enable <strong>maxillary forward growth</strong> through:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Midpalatal suture:</strong> Lateral maxillary expansion</li>
                      <li><strong>Circum-maxillary sutures:</strong> Forward and downward maxillary displacement</li>
                      <li><strong>Pterygo-maxillary suture:</strong> Forward maxillary positioning</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      This is the primary mechanism in orthopedic expansion and forward growth protocols (MSE, facemask therapy, etc.)
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-purple-900 mb-3">2. Mandibular Adaptive Positioning</h4>
                    <p className="text-gray-700 mb-3">
                      The mandible responds to maxillary changes through:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Glenoid fossa remodeling:</strong> TMJ adapts to new jaw relationships</li>
                      <li><strong>Condylar growth:</strong> Vertical and some horizontal growth at the condyle</li>
                      <li><strong>Postural repositioning:</strong> Mandible assumes a more forward resting position</li>
                      <li><strong>Functional adaptation:</strong> Masticatory forces influence bone remodeling</li>
                    </ul>
                    <p className="text-gray-700 mt-3 font-semibold">
                      Note: This is adaptive positioning and remodeling, not primary mandibular suture-driven growth.
                    </p>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-amber-900 mb-3">3. True Mandibular Growth (Limited)</h4>
                    <p className="text-gray-700 mb-3">
                      The mandible has no midline suture like the maxilla, so growth occurs via:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Condylar cartilage:</strong> Primary growth site (vertical &gt; horizontal)</li>
                      <li><strong>Appositional bone growth:</strong> Surface remodeling on ramal and corpus</li>
                      <li><strong>Symphyseal area:</strong> Very limited growth potential (fuses by age 1-2)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-red-900 mb-3">Key Limitation</h4>
                    <p className="text-gray-700">
                      <strong>The mandible itself does not have patent sutures in adolescents/adults.</strong> The symphysis fuses in infancy. Growth potential is primarily:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
                      <li>Condylar growth (diminishes significantly after puberty)</li>
                      <li>Remodeling and adaptation to environmental changes</li>
                      <li>Postural changes from maxillary expansion</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Does "Open Sutures" Actually Enable?</h3>

                <div className="bg-indigo-50 rounded-lg p-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">For Children (Pre-Puberty):</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Maxillary expansion and forward growth via orthopedic forces</li>
                      <li>Active condylar growth and mandibular lengthening</li>
                      <li>High remodeling potential</li>
                      <li>Significant adaptive capacity</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">For Adolescents/Young Adults (Open Sutures):</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Maxillary expansion possible (MSE, MARPE)</li>
                      <li>Some maxillary forward positioning</li>
                      <li>Mandibular adaptation through TMJ remodeling</li>
                      <li>Limited condylar growth (diminishing)</li>
                      <li>Forward postural changes possible</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-indigo-900 text-lg mb-2">For Adults (Fused Sutures):</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>SARPE (surgically assisted expansion) may be needed</li>
                      <li>Minimal skeletal changes</li>
                      <li>Primarily dental movements</li>
                      <li>Surgical approaches for major changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'signs' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Signs of Open (Patent) Sutures
              </h2>

              <div className="prose prose-lg max-w-none">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <p className="text-lg font-semibold text-blue-900 mb-2">
                    Clinical and Diagnostic Indicators
                  </p>
                  <p className="text-gray-700">
                    Open sutures indicate ongoing growth potential and skeletal adaptability. Here are the key signs to look for.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Imaging Signs (Gold Standard)</h3>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-purple-900 mb-3">Cone Beam CT (CBCT) Findings</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Visible suture lines:</strong> Radiolucent lines between bones</li>
                      <li><strong>Irregular/interdigitated margins:</strong> Not fully fused</li>
                      <li><strong>Midpalatal suture patency:</strong> Clear separation visible</li>
                      <li><strong>Circum-maxillary sutures:</strong> Visible gaps at zygomaticomaxillary, pterygomaxillary, frontomaxillary sutures</li>
                      <li><strong>Spheno-occipital synchondrosis:</strong> Open until late teens/early 20s</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600 italic">
                      Most reliable method for assessing suture status
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-green-900 mb-3">Panoramic/Cephalometric X-Ray Signs</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Midpalatal suture visible:</strong> Dark line down center of palate</li>
                      <li><strong>Less defined bone density:</strong> At suture sites</li>
                      <li><strong>Cervical vertebrae maturation:</strong> Stages CS1-CS4 suggest active growth</li>
                      <li><strong>Hand-wrist radiographs:</strong> Open epiphyses indicate growth potential</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Age-Related Indicators</h3>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">High Probability of Open Sutures:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Children (0-12 years): Sutures almost always patent</li>
                        <li>Early adolescents (12-15 years): Usually patent, high growth potential</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Variable (Individual Assessment Needed):</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Late adolescents (15-18 years): Variable fusion timing</li>
                        <li>Young adults (18-25 years): Midpalatal often fusing, but some remain open</li>
                        <li>Spheno-occipital can remain open until mid-20s</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Usually Fused:</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li>Adults (25+ years): Most facial sutures fused</li>
                        <li>Variable individual timing based on genetics</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Clinical/Physical Signs</h3>

                <div className="space-y-4">
                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-yellow-900 mb-3">Growth-Related Signs</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Active pubertal growth:</strong> Growth spurt ongoing, height increasing</li>
                      <li><strong>Cervical vertebrae stage CS1-CS4:</strong> Pre-peak or peak growth</li>
                      <li><strong>Hand-wrist epiphyses not fused:</strong> Skeletal maturation incomplete</li>
                      <li><strong>Recent facial changes:</strong> Face still developing noticeably</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-orange-900 mb-3">Dental Signs (Indirect)</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Developing dentition:</strong> Third molars not yet erupted</li>
                      <li><strong>Space available:</strong> Arch still has expansion potential</li>
                      <li><strong>Successful expansion history:</strong> Previously responded to orthopedic forces</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-pink-900 mb-3">Response to Treatment (Functional Test)</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>MSE/MARPE trial:</strong> Diastema opens = suture is patent</li>
                      <li><strong>Expansion success:</strong> Skeletal expansion occurs vs. only dental tipping</li>
                      <li><strong>Rapid response:</strong> Quick skeletal changes suggest open sutures</li>
                      <li><strong>Facial changes observed:</strong> Not just tooth movement</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600 italic">
                      This is often the most practical assessment in clinical settings
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Specific Suture Assessment</h3>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b-2 border-indigo-200">
                        <th className="py-3 px-4 font-bold text-indigo-900">Suture</th>
                        <th className="py-3 px-4 font-bold text-indigo-900">Typical Fusion Age</th>
                        <th className="py-3 px-4 font-bold text-indigo-900">Assessment Method</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-indigo-100">
                        <td className="py-3 px-4 font-semibold">Midpalatal</td>
                        <td className="py-3 px-4">15-19 years (variable)</td>
                        <td className="py-3 px-4">CBCT, occlusal X-ray, expansion trial</td>
                      </tr>
                      <tr className="border-b border-indigo-100">
                        <td className="py-3 px-4 font-semibold">Spheno-occipital</td>
                        <td className="py-3 px-4">18-25 years</td>
                        <td className="py-3 px-4">Lateral ceph, CBCT</td>
                      </tr>
                      <tr className="border-b border-indigo-100">
                        <td className="py-3 px-4 font-semibold">Zygomaticomaxillary</td>
                        <td className="py-3 px-4">Late teens to 20s</td>
                        <td className="py-3 px-4">CBCT</td>
                      </tr>
                      <tr className="border-b border-indigo-100">
                        <td className="py-3 px-4 font-semibold">Pterygomaxillary</td>
                        <td className="py-3 px-4">Late teens to 20s</td>
                        <td className="py-3 px-4">CBCT, lateral ceph</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-semibold">Frontonasal</td>
                        <td className="py-3 px-4">Highly variable</td>
                        <td className="py-3 px-4">CBCT, PA ceph</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Key Takeaway Signs</h3>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-900 mb-4">You Likely Have Open Sutures If:</h4>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-2xl">✓</span>
                      <span>You are under 18 years old and still growing in height</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-2xl">✓</span>
                      <span>CBCT shows visible radiolucent suture lines</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-2xl">✓</span>
                      <span>Cervical vertebrae maturation is CS1-CS4</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-2xl">✓</span>
                      <span>Hand-wrist X-ray shows open epiphyses</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-2xl">✓</span>
                      <span>MSE/MARPE creates midline diastema (gap)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-green-600 text-2xl">✓</span>
                      <span>Recent rapid facial/dental changes observed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Clinical Recommendation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>The only definitive way to assess suture patency is through imaging (CBCT preferred).</strong>
                    Age, growth stage, and clinical response to treatment provide supporting evidence, but individual
                    variation is significant. A young adult at 20 may have patent midpalatal sutures, while another
                    at 17 may be fused. Always confirm with proper diagnostic imaging before pursuing orthopedic expansion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              <strong>Forward mandibular growth</strong> when sutures are open is primarily indirect—driven by maxillary
              expansion and forward growth that triggers mandibular adaptation through TMJ remodeling and condylar growth.
              The mandible itself has no midline suture in adolescents/adults.
            </p>
            <p className="leading-relaxed">
              <strong>Signs of open sutures</strong> include imaging evidence (CBCT showing radiolucent suture lines),
              age-related indicators (under 18-25, active growth), clinical signs (CS1-CS4 vertebral maturation), and
              functional response to expansion (diastema formation with MSE/MARPE).
            </p>
            <p className="leading-relaxed font-semibold text-indigo-900">
              Open sutures = opportunity for maxillary orthopedic change → mandibular adaptation, not direct mandibular
              suture expansion.
            </p>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-600 text-sm">
          <p>Educational resource on craniofacial growth biology</p>
          <p className="mt-2">Always consult qualified healthcare professionals for medical advice</p>
        </footer>
      </div>
    </main>
  )
}
