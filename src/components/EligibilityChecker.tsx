import { useState } from 'react';
import { toast } from 'sonner';

export const EligibilityChecker = () => {
  const [formData, setFormData] = useState({
    district: '',
    income: '',
    category: '',
    need: '',
    mobile: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [schemes, setSchemes] = useState<any[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.district || !formData.income || !formData.category || !formData.need || !formData.mobile) {
      toast.error('Kripaya sabhi fields fill karein');
      return;
    }

    // Simple scheme matching logic
    let matchedSchemes: any[] = [];
    
    if (formData.need === 'education') {
      matchedSchemes.push({
        name: 'Mukhyamantri Kanya Utthan Yojana',
        benefit: '₹50,000 graduation tak',
        description: 'Girl students ke liye birth se graduation tak financial support'
      });
      matchedSchemes.push({
        name: 'Pre-Matric Scholarship', 
        benefit: '₹1,200 annually',
        description: 'SC/ST/OBC students ke liye class 1-10 scholarship'
      });
    }
    
    if (formData.need === 'hygiene') {
      matchedSchemes.push({
        name: 'Swachh Bharat Mission',
        benefit: '₹12,000 toilet construction',
        description: 'Individual household toilet construction support'
      });
    }
    
    if (formData.need === 'digital') {
      matchedSchemes.push({
        name: 'Digital India Initiative',
        benefit: 'Free digital services',
        description: 'Aadhaar, DigiLocker, online certificates'
      });
    }
    
    if (formData.need === 'livelihood') {
      matchedSchemes.push({
        name: 'PMMY Mudra Loan',
        benefit: 'Up to ₹10 lakh loan',
        description: 'Business development ke liye collateral-free loan'
      });
      matchedSchemes.push({
        name: 'SHG Support Scheme',
        benefit: '₹1-5 lakh credit',
        description: 'Women self-help groups ke liye financial support'
      });
    }
    
    if (formData.need === 'healthcare') {
      matchedSchemes.push({
        name: 'Ayushman Bharat PMJAY',
        benefit: '₹5 lakh health insurance',
        description: 'Secondary aur tertiary healthcare coverage'
      });
    }

    // Add some universal schemes
    if (formData.income === 'below-1' || formData.income === '1-2') {
      matchedSchemes.push({
        name: 'PM Awas Yojana',
        benefit: '₹1.2-2.5 lakh housing',
        description: 'Pucca ghar construction/improvement support'
      });
    }

    setSchemes(matchedSchemes);
    setShowResults(true);
    toast.success('Schemes match ho gayi hain! Hamari team aapko call karegi.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="eligibility" className="bg-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Eligibility Check Karein
        </h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-200 p-8 rounded-2xl shadow-card">
          <div className="space-y-6">
            <div>
              <label htmlFor="district" className="block text-sm font-semibold text-foreground mb-2">
                District
              </label>
              <select
                name="district"
                id="district"
                value={formData.district}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 border-border rounded-lg text-foreground focus:border-udisha focus:outline-none"
              >
                <option value="">Select District</option>
                <option value="patna">Patna</option>
                <option value="gaya">Gaya</option>
                <option value="muzaffarpur">Muzaffarpur</option>
                <option value="darbhanga">Darbhanga</option>
                <option value="bhagalpur">Bhagalpur</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="income" className="block text-sm font-semibold text-foreground mb-2">
                Household Income (Annual)
              </label>
              <select
                name="income"
                id="income"
                value={formData.income}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 border-border rounded-lg text-foreground focus:border-udisha focus:outline-none"
              >
                <option value="">Select Income Range</option>
                <option value="below-1">Below ₹1 Lakh</option>
                <option value="1-2">₹1-2 Lakh</option>
                <option value="2-3">₹2-3 Lakh</option>
                <option value="above-3">Above ₹3 Lakh</option>
              </select>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-foreground mb-2">
                Category
              </label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 border-border rounded-lg text-foreground focus:border-udisha focus:outline-none"
              >
                <option value="">Select Category</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="obc">OBC</option>
                <option value="ews">EWS</option>
                <option value="general">General</option>
              </select>
            </div>

            <div>
              <label htmlFor="need" className="block text-sm font-semibold text-foreground mb-2">
                Primary Need
              </label>
              <select
                name="need"
                id="need"
                value={formData.need}
                onChange={handleInputChange}
                required
                className="w-full p-3 border-2 border-border rounded-lg text-foreground focus:border-udisha focus:outline-none"
              >
                <option value="">Select Primary Need</option>
                <option value="education">Education Support</option>
                <option value="hygiene">Hygiene/Sanitation</option>
                <option value="digital">Digital Access</option>
                <option value="livelihood">Livelihood Support</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-semibold text-foreground mb-2">
                Mobile/WhatsApp Number
              </label>
              <input
                type="tel"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter 10-digit number"
                required
                className="w-full p-3 border-2 border-border rounded-lg text-foreground focus:border-udisha focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-udisha text-white py-4 rounded-full font-semibold text-lg hover:bg-udisha-dark transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Check Matching Schemes
            </button>
          </div>
        </form>

        {showResults && (
          <div className="max-w-2xl mx-auto mt-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center">
              🎉 Aapke Liye Available Schemes:
            </h4>
            <div className="space-y-4">
              {schemes.map((scheme, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border-l-3 border-udisha">
                  <h5 className="font-semibold text-udisha mb-2">{scheme.name}</h5>
                  <p className="text-sm text-text-muted mb-1">
                    <strong>Benefit:</strong> {scheme.benefit}
                  </p>
                  <p className="text-sm text-text-light">{scheme.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-green-700">
              <strong>Next Steps:</strong> Humari team 48 hours mein aapko call karegi aur complete process guide karegi. WhatsApp par bhi updates milenge.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};