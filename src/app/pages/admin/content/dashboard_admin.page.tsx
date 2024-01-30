import { Tooltip } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
  const [dataOverView, setDataOverView] = useState([]);
  const [dataChart, setDataChart] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetchDataOverview();
  }, []);

  const fetchDataOverview = async () => {
    // let res = await getOverview();
    // if (res && res.EC === 0) {
    //   setDataOverView(res.DT);
    //   //process chart data
    //   let QZ = 0,
    //     QS = 0,
    //     AS = 0;
    //   QZ = res?.DT?.others?.countQuiz ?? 0;
    //   QS = res?.DT?.others?.countQuestions ?? 0;
    //   AS = res?.DT?.others?.countAnswers ?? 0;
    //   const data = [
    //     {
    //       name: 'Quizzes',
    //       QZ: QZ,
    //     },
    //     {
    //       name: 'Questions',
    //       QS: QS,
    //     },
    //     {
    //       name: 'Answers',
    //       AS: AS,
    //     },
    //   ];
    //   setDataChart(data);
    // }
  };

  const data = [
    { name: 'Tháng 1', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Tháng 2', uv: 300, pv: 1398, amt: 2210 },
    { name: 'Tháng 3', uv: 200, pv: 9800, amt: 2290 },
    { name: 'Tháng 4', uv: 278, pv: 3908, amt: 2000 },
    { name: 'Tháng 5', uv: 189, pv: 4800, amt: 2181 },
    { name: 'Tháng 6', uv: 239, pv: 3800, amt: 2500 },
    { name: 'Tháng 7', uv: 349, pv: 4300, amt: 2100 },
  ];

  return (
    <div className="p-10 pt-2">
      <div className="text-5xl font-semibold mb-10">{t('admin-dashboard.dashboard')}</div>
      <hr />
      <div className="flex ">
        <div className="mt-10 w-full flex flex-wrap gap-15">
          <div className="flex flex-col w-[calc(25%-40px)] h-60 border border-gray-300 items-center justify-center rounded-md bg-light-blue-600">
            <span className="text-1">{t('dashboard.title2.user')}</span>
            <span className="text-20 font-semibold">
              {/* {dataOverView && dataOverView.users && dataOverView.users.total ? (
                <>{dataOverView.users.total}</>
              ) : (
                <>0</>
              )} */}
            </span>
          </div>
          <div className="flex flex-col w-[calc(25%-40px)] h-60 border border-gray-300 items-center justify-center rounded-md bg-green-700">
            <span className="text-1">{t('dashboard.title2.quiz')}</span>
            <span className="text-20 font-semibold">
              {/* {dataOverView && dataOverView.others && dataOverView.others.countQuiz ? (
                <>{dataOverView.others.countQuiz}</>
              ) : (
                <>0</>
              )} */}
            </span>
          </div>
          <div className="flex flex-col w-[calc(25%-40px)] h-60 border border-gray-300 items-center justify-center rounded-md bg-pink-300">
            <span className="text-1">{t('dashboard.title2.question')}</span>
            <span className="text-20 font-semibold">
              {/* {dataOverView && dataOverView.others && dataOverView.others.countQuestions ? (
                <>{dataOverView.others.countQuestions}</>
              ) : (
                <>0</>
              )} */}
            </span>
          </div>
          <div className="flex flex-col w-[calc(25%-40px)] h-60 border border-gray-300 items-center justify-center rounded-md bg-yellow-500">
            <span className="text-1">{t('dashboard.title2.answer')}</span>
            <span className="text-20 font-semibold">
              {/* {dataOverView && dataOverView.others && dataOverView.others.countAnswers ? (
                <>{dataOverView.others.countAnswers}</>
              ) : (
                <>0</>
              )} */}
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-10 w-1/2 flex flex-wrap gap-10">
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="primary" strokeWidth={2} dot={{ fill: 'primary' }} />
            {/* Các đường biểu đồ khác (nếu có) */}
          </LineChart>
        </div>
        <div className="mt-10 w-1/2 flex flex-wrap gap-20">
          <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="primary" strokeWidth={2} dot={{ fill: 'primary' }} />
            {/* Các đường biểu đồ khác (nếu có) */}
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
