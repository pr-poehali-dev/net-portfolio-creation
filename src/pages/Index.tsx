import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const skills = [
    { name: 'C#', icon: 'Code' },
    { name: 'ASP.NET', icon: 'Globe' },
    { name: 'Entity Framework', icon: 'Database' },
    { name: 'PostgreSQL', icon: 'Database' },
    { name: 'Kafka', icon: 'Zap' },
    { name: 'Kubernetes', icon: 'Container' },
    { name: 'Redis', icon: 'Zap' },
    { name: 'Gitlab', icon: 'GitBranch' },
    { name: 'Docker', icon: 'Package' },
    { name: 'Prometheus', icon: 'Activity' },
    { name: 'Nginx', icon: 'Server' }
  ];

  const experience = [
    {
      title: '.NET разработчик',
      company: 'Тинькофф',
      period: '2023 - настоящее время',
      description: 'Проектировал и разрабатывал с нуля приложение из 2 ASP.NET сервисов, взаимодействующих по Kafka и проинтегрированных с большим количеством внутренних сервисов компании через REST и Kafka.',
      achievements: [
        'Участвовал в декомпозиции эпика и планировании сроков',
        'Продумывал высокоуровневую архитектуру приложения и проектировал реализацию сервисов',
        'Участвовал в постепенном бесшовном переносе трафика со старого приложения',
        'Настраивал PostgreSQL, Kafka, Kubernetes и NGinx',
        'Реализовал сбор кастомных метрик и настраивал дашборды в Grafana',
        'Проресерчил и реализовал решения для проверки ЭЦП'
      ]
    },
    {
      title: '.NET разработчик',
      company: 'Тинькофф',
      period: '2022 - 2023',
      description: 'Разрабатывал и поддерживал приложение из нескольких микросервисов на платформе ASP.NET, взаимодействующих через Kafka и через REST.',
      achievements: [
        'Участвовал в вынесении микросервисов из монолита',
        'Настраивал в GitLab CI сборку Docker образов и деплой в Kubernetes',
        'Настраивал распределённый кэш и блокировки с использованием Redis',
        'Реализовал решение для фича-флагов и выступал с ним на 2 митапах',
        'Выступал в роли ответственного за фичи',
        'Участвовал в разборе инцидентов в продакшене'
      ]
    },
    {
      title: '.NET/Angular Fullstack',
      company: 'Тинькофф',
      period: '2022',
      description: 'Fullstack разработка с использованием .NET и Angular технологий.'
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Code" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">.NET Developer Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О себе</a>
            <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">Навыки</a>
            <a href="#experience" className="text-sm font-medium hover:text-primary transition-colors">Опыт</a>

            <Button>Скачать резюме</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              .NET Developer
            </h1>
            <p className="text-xl text-medium-gray mb-8 max-w-2xl mx-auto">
              Создаю современные веб-приложения и API с использованием Microsoft технологий. 
              Специализируюсь на высоконагруженных системах и микросервисной архитектуре.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Mail" className="mr-2 h-4 w-4" />
                Связаться
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Github" className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Обо мне</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-medium-gray mb-6">
                Опытный .NET разработчик с более чем 5-летним опытом создания корпоративных решений. 
                Увлечен современными технологиями и постоянно изучаю новые подходы в разработке.
              </p>
              <p className="text-lg text-medium-gray mb-6">
                Специализируюсь на разработке масштабируемых веб-приложений, RESTful API и микросервисов. 
                Имею опыт работы с облачными платформами и DevOps практиками.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">5+ лет опыта</Badge>
                <Badge variant="secondary">15+ проектов</Badge>
                <Badge variant="secondary">Agile/Scrum</Badge>
                <Badge variant="secondary">Team Lead</Badge>
              </div>
            </div>
            <div className="relative">
              <Card className="transform hover:scale-105 transition-transform">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Александр Иванов</h3>
                      <p className="text-medium-gray">Senior .NET Developer</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-medium-gray">
                      <Icon name="MapPin" className="h-4 w-4 mr-2" />
                      Москва, Россия
                    </div>
                    <div className="flex items-center text-sm text-medium-gray">
                      <Icon name="Mail" className="h-4 w-4 mr-2" />
                      alexander.dev@email.com
                    </div>
                    <div className="flex items-center text-sm text-medium-gray">
                      <Icon name="Phone" className="h-4 w-4 mr-2" />
                      +7 (999) 123-45-67
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-light-gray">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Технические навыки</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <Icon name={skill.icon} className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{skill.name}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Опыт работы</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary">{job.title}</CardTitle>
                      <h4 className="text-lg font-semibold text-medium-gray">{job.company}</h4>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      <Icon name="Calendar" className="h-3 w-3 mr-1" />
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-medium-gray mb-4">{job.description}</p>
                  {job.achievements && (
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-medium-gray flex items-start">
                          <Icon name="ChevronRight" className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Готов к новым проектам</h2>
          <p className="text-xl mb-8 opacity-90">
            Ищу интересные задачи и возможности для профессионального роста
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Icon name="Mail" className="mr-2 h-4 w-4" />
              Написать письмо
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Icon name="Download" className="mr-2 h-4 w-4" />
              Скачать резюме
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-dark-gray text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70">© 2024 Александр Иванов. Все права защищены.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Github" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Mail" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}