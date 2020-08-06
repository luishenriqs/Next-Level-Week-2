import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import warningIcon from '../../assets/images/icons/warning.svg';
import './style.css';

/*const [variavel, setVariavel] = useState([array com {dados iniciais da variavel}])*/
function TeacherForm() {
    const [scheduleItens, setScheduleItens] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    /*setVariavel copia e adiciona novos dados alterando o estado.
    setVariavel([...variavel, {novos dados à variavel} ])*/
    function addNewScheduleItem() {
        setScheduleItens([ 
            ...scheduleItens,
            { week_day: 0, from: '', to: '' }
        ])
    }

    return (
        <div id="page-teacher-form" className="container" >
            <PageHeader 
            title="Que incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name='name' label='Nome Completo' />
                    <Input name='avatar' label='Avatar' />
                    <Input name='whatsapp' label='Whatsapp' />
                    <Textarea name='Bio' label='Biografia' />
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name='subject' 
                        label='Matéria'
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Ed. Física', label: 'Ed. Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'Artes' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Xadrez', label: 'Xadrez' }
                        ]} 
                    />
                    <Input name='cost' label='Custo da sua hora por aula' />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type='button' onClick={addNewScheduleItem} >
                            + Novo Horário
                        </button>
                    </legend>

                    {scheduleItens.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name='week_day' 
                                    label='Dia da semana'
                                    options={[
                                        { value: '0', label: 'Domingo' },
                                        { value: '1', label: 'Segunda-Feira' },
                                        { value: '2', label: 'Terça-Feira' },
                                        { value: '3', label: 'Quarta-Feira' },
                                        { value: '4', label: 'Quinta-Feira' },
                                        { value: '5', label: 'Sexta-Feira' },
                                        { value: '6', label: 'Sábado' }
                                    ]} 
                                />
                                <Input name='from' label='Das' type='time' />
                                <Input name='to' label='Até' type='time' />
                            </div>
                        );
                    })}
    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante <br />
                        Preencha todos os dados
                    </p>
                    <button type='button'>
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;