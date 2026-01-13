
import React, { useState, useRef } from 'react';
import { generateSushiVideo, checkApiKey, requestApiKey } from '../services/geminiService';

const AIAnimator: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setVideoUrl(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const startGeneration = async () => {
    if (!image) return;

    try {
      const hasKey = await checkApiKey();
      if (!hasKey) {
        await requestApiKey();
        // After opening dialog, we proceed assuming user will pick a key
      }

      setIsGenerating(true);
      setStatus('Iniciando magia com IA...');
      
      const base64Data = image.split(',')[1];
      const resultVideo = await generateSushiVideo(
        base64Data, 
        "Make this sushi look delicious with steam rising and soft lighting cinematic movement, high quality, 4k",
        '16:9'
      );
      
      setVideoUrl(resultVideo);
      setStatus('Finalizado!');
    } catch (error: any) {
      console.error(error);
      if (error.message?.includes('Requested entity was not found')) {
        await requestApiKey();
      }
      setStatus('Erro ao gerar animação. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section id="ai-animator" className="py-24 bg-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h3 className="text-red-600 uppercase tracking-[0.2em] mb-4">Experiência Digital</h3>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Animador de Sushi IA</h2>
        <p className="text-zinc-400 mb-12">
          Envie uma foto do seu sushi e nossa inteligência artificial irá dar vida a ele, 
          adicionando efeitos de frescor e movimento cinematográfico.
        </p>

        <div className="bg-zinc-900/50 p-8 border border-white/10 rounded-2xl">
          {!image && !videoUrl ? (
            <div 
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 p-20 cursor-pointer hover:border-red-600/50 transition-colors group"
            >
              <div className="flex flex-col items-center gap-4">
                <svg className="w-12 h-12 text-zinc-600 group-hover:text-red-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold">Clique para enviar uma foto</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest opacity-50">Original</p>
                  <img src={image!} alt="Original" className="w-full aspect-video object-cover rounded-lg border border-white/10" />
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest opacity-50">Animado por IA</p>
                  <div className="w-full aspect-video bg-black rounded-lg border border-red-600/30 flex items-center justify-center relative overflow-hidden">
                    {videoUrl ? (
                      <video src={videoUrl} controls autoPlay loop className="w-full h-full object-cover" />
                    ) : isGenerating ? (
                      <div className="text-center p-8 space-y-4">
                        <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="text-sm gold-text animate-pulse">{status}</p>
                        <p className="text-[10px] text-zinc-500 max-w-[200px] mx-auto">A geração de vídeo pode levar alguns minutos. Aguarde a magia acontecer...</p>
                      </div>
                    ) : (
                      <span className="text-zinc-700 text-xs italic">Aguardando geração...</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button 
                  onClick={() => { setImage(null); setVideoUrl(null); }}
                  className="px-8 py-3 border border-white/20 hover:border-white transition-colors text-xs uppercase tracking-widest font-bold"
                >
                  Mudar Foto
                </button>
                <button 
                  onClick={startGeneration}
                  disabled={isGenerating || !!videoUrl}
                  className={`px-8 py-3 transition-all text-xs uppercase tracking-widest font-bold ${isGenerating || !!videoUrl ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]'}`}
                >
                  {isGenerating ? 'Gerando...' : videoUrl ? 'Vídeo Pronto' : 'Gerar Animação'}
                </button>
              </div>
            </div>
          )}
        </div>
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handleFileChange} 
        />
        
        <p className="mt-8 text-[10px] text-zinc-600 uppercase tracking-widest">
          Powered by Google Gemini Veo &bull; Luanda 2024
        </p>
      </div>
    </section>
  );
};

export default AIAnimator;
